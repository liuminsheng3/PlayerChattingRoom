import json

import urllib.request
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import random
file = open('/Users/macbookpro/react-native-project/play/webScripter/dataInfo.js','r')
data = json.load(file)
file.close()

print(len(data))

def findElement(arrays, name):
    for index, item in enumerate(arrays):
        print(item)
    return -1

result = [];
for index, item in enumerate(data):
    print(item)
        


'''
dummy_data = []

for item in items:
    id = item['index']

    for clip in item['clips']:
        
        dummy_data.append({"id":id,"user":{"id":clip['clip_index'], "name": clip['uploader_name'], "imageUri":clip['uploader_url'], "content":clip['uploader_video_title']}})
 
file = open('/Users/macbookpro/react-native-project/play/assets/dummyData/user.js','w')

json.dump(result, file)

file.close()
 '''  