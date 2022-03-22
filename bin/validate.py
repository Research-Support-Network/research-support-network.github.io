import sys
import yaml

from glob import glob
from os.path import abspath, join, dirname, realpath

data_path = abspath(join(dirname(realpath(__file__)), "../_data/members"))

LENGTH = 400
EXITSTATUS = 0

for file in glob(f"{data_path}/*"):
    with open(file) as fh:
        ymlf = yaml.load(fh, Loader=yaml.FullLoader)
        for key in ymlf:
            if len(ymlf[key]) > LENGTH:
                print(f"File's '{file}' field '{key}' is {len(ymlf[key])} characters long when only {LENGTH} are allowed.")
                EXITSTATUS = 1

sys.exit(EXITSTATUS)
