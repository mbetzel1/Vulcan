import imageio.v3 as iio
from PIL import Image
import numpy as np

def scale_and_crop_gif(input_path, desired_width, desired_height, crop_behavior="top"):
    # Read the GIF using imageio
    gif = iio.imread(input_path)
    
    # Initialize a list to store resized and cropped frames
    resized_cropped_frames = []
    init_width = gif.shape[2]
    init_height = gif.shape[1]
    height_ratio = desired_height/init_height
    width_ratio = desired_width/init_width
    scale_factor = max(height_ratio, width_ratio)
    if crop_behavior == "center":
        full_height = init_height * scale_factor
        full_width = init_width * scale_factor
        hor_crop_size = full_width - desired_width
        vert_crop_size = full_height - desired_height
        crop_left = np.floor(hor_crop_size/2)
        crop_top = np.floor(vert_crop_size/2)
        crop_box = (crop_left, crop_top, crop_left + desired_width, crop_top + desired_height)

    else:
        crop_box = (0, 0, desired_width, desired_height)

    # Iterate through each frame in the GIF
    for frame in gif:
        # Convert the frame to a PIL Image
        pil_frame = Image.fromarray(frame)

        # Scale the image larger using nearest-neighbor interpolation
        new_size = (int(pil_frame.width * scale_factor), int(pil_frame.height * scale_factor))
        scaled_frame = pil_frame.resize(new_size, Image.NEAREST)

        # Crop the image using the specified box (crop_box)
        cropped_frame = scaled_frame.crop(crop_box)

        # Append the cropped frame to the list
        resized_cropped_frames.append(np.asarray(cropped_frame))

    # Save the resized and cropped frames as a new GIF using imageio
    return resized_cropped_frames

def scale_crop_combine(gif_list, output_path, desired_width, desired_height):
    resized_cropped_frames = []
    for gif_path in gif_list:
        resized_cropped_frames = resized_cropped_frames + scale_and_crop_gif(
            gif_path,
            desired_width,
            desired_height,
            "center"
        )
    iio.imwrite(output_path, resized_cropped_frames)


# Example usage
input_gif_path = [
    "./images/old_images/windmills-twilight.gif",
    "./images/old_images/f15-engine.gif", 
    "./images/old_images/offshore-wind.gif", 
    "./images/old_images/machining.gif", 
    "./images/old_images/shuttle-launch.gif",
                  ]
output_gif_path = './images/combined.gif'
scale_factor = 3  # Adjust the scale factor as needed
desired_height = 281 * 2
desired_width = 500 * 2

scale_crop_combine(input_gif_path, output_gif_path, desired_width, desired_height)
