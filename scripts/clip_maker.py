import sys
# 18 to 24 takeoff
# 18 to 21 machining
from moviepy.video.io.ffmpeg_tools import ffmpeg_extract_subclip

# vid = ffmpeg.input('./video/carrier-takeoff.mp4')
# vid = vid.trim(start_time=18.0, end_time=24.0)
# output_file = './video/processed_clips/takeoff.mp4' 
# out = vid.output(vid, output_file)
input = sys.argv[1]
output = sys.argv[2]
start = float(sys.argv[3])
end = float(sys.argv[4])
ffmpeg_extract_subclip(input, start, end, targetname=output)
