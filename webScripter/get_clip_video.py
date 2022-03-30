


import urllib.request
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import json

"""
First set up the environment
"""
BASE_URL = 'https://www.twitch.tv/directory'


driver = webdriver.Chrome('/Users/macbookpro/Downloads/chromedriver')


driver.get('https://www.google.com')


file = open('dataInfo.json')
data = json.load(file)

file.close()


items = data['item']

try:

    for i,item in enumerate(items):
        if i <47:
            continue
        
        if len(item['clips']) >0:
            
    
            for j,clip in enumerate(item['clips']):
                if i == 47 and j < 4:
                    continue
                video_url = clip['video_page_url']

                
                driver.get(video_url)
                print('i: '+str(i) +', j = '+str(j) + ", line 43")
                #find video link
                time.sleep(4)
                print('i: '+str(i) +', j = '+str(j) + ", line 46")
                video_element = driver.find_element_by_tag_name('video')
                print('i: '+str(i) +', j = '+str(j) + ", line 48")
                
                video_url = video_element.get_attribute('src')
                
                if video_url == '':
                    data['item'][i]['clips'].pop(j)
                    driver.back()
                    continue
                #save link
                data['item'][i]['clips'][j]['video_prop']={}
                data['item'][i]['clips'][j]['video_prop']['video_url'] = video_url
                #save video
                urllib.request.urlretrieve(video_url, 'images/clips/videos/'+str(item['index'])+'_'+str((j+1))+'_video.mp4') 
                #save video path
                data['item'][i]['clips'][j]['video_prop']['video_path'] = 'images/clips/videos/'+str(item['index'])+'_'+str((j+1))+'_video.mp4'
                print('i: '+str(i) +', j = '+str(j) + ", finish one j loop")
                driver.back()    
        print('i: '+str(i) + ", finish one i loop")
        
    
        file =  open('dataInfo.json','w')
        json.dump(data, file)
        file.close()    
    
    driver.close()
except Exception as e:
    print("sth went wrong: "+str(e))
    if driver:
        driver.close()
        