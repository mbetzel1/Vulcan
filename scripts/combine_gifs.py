import imageio
from skimage.transform import resize
from PIL import Image

def combine_gifs(gif_list, output_gif):
    writer = imageio.get_writer(output_gif, loop = 0)
    for gif_path in gif_list:
        gif = imageio.get_reader(gif_path)
        for frame in gif:
            # resized_frame = resize(frame, (281, 500, 4), preserve_range=True).astype(frame.dtype)
            resized_frame = Image.fromarray(frame).resize(281, 500, 4)
            writer.append_data(resized_frame)
    writer.close()

output_gif = "./images/combined.gif"
gif_list =  ["./images/windmills-twilight.gif","./images/f15-engine.gif", "./images/offshore-wind.gif", "./images/machining.gif", "./images/shuttle-launch.gif",]
combine_gifs(gif_list, output_gif)
