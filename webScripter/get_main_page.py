
import urllib.request
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import json

"""
在一个for loop中：
1. 保存一个图片
2. 保存title
3. 保存index
4. 打开链接
5. 检查是否有内容页，
  a. 如果有，
    1. 点击按钮
    2. 保存文字
    3.推出当前页面并保存到intro变量中
    4.找到tag
    5.
    5-1 点击intro button
    5-2 保存内容
    6.保存index，name，intro，tags
    7.点击Clips按钮
      a. 获取所有的包含video的子集，并建立一个for loop 
      b. 获取里面的每一个image链接
      c.获取里面每一个title，user name， user image url
      d.获取里面视频页面链接
      e.点开视频获取里面的视频地址
      f. 保存clips_id，game_name, user，title，image_url, video_url到一个object
      g. 保存所有clips的object到一个大的object

    8. 点击Videos按钮
      a. 获取所有的包含video的子集，并建立一个for loop 
      b. 获取里面的每一个image链接
      c.获取里面每一个title，user name， user image url，views
      d.获取里面视频页面链接
      e.点开视频获取里面的视频地址
      f. 保存clips_id，game_name, user，title，image_url, video_url到一个object
      g. 保存所有clips的object到一个大的object
    8. 点击Videos按钮
退出当前页面，继续for loop
"""

"""
First set up the environment
"""
BASE_URL = 'https://www.twitch.tv/directory'


driver = webdriver.Chrome('/Users/macbookpro/Downloads/chromedriver')

driver.get(BASE_URL)


data = {}
data['item'] = []


try:
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div[2]/div[1]/main/div[2]/div[3]/div/div/div/div/div[5]/div/div[1]/div[19]/div/div/div/div/div[1]/div/a/div/div[5]/div/div/div/div/img'))
    )
    
    
    for i in range(2,100):

            
        """
        1. save image
        """
        
        #create temp variable, initial all the value
        all_info = {}
        all_info['cover_image_info'] = {}
        all_info['tags']=[]
        all_info['index'] = -1
        all_info['name'] = "couldn't find name"
        all_info['cover_image_info'] = {}
        all_info['clips'] = []
        

        
        #find image element
        imageElement = driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div[1]/main/div[2]/div[3]/div/div/div/div/div[5]/div/div[1]/div['+str(i)+']/div/div/div/div/div[1]/div/a/div/div[5]/div/div/div/div/img')
        #focus the image element, used for scrolling 
        driver.execute_script('arguments[0].scrollIntoView()', imageElement)
        time.sleep(1)

                

        #ger game name
        game_name = driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div[1]/main/div[2]/div[3]/div/div/div/div/div[5]/div/div[1]/div['+str(i)+']/div/div/div/div/div[1]/div/div/div/div/span/a/h2').text

        #get image url
        cover_image_url = imageElement.get_attribute('src')
        #save image
        urllib.request.urlretrieve(cover_image_url, 'images/covers/'+str((i))+'.jpg')        
        
        #2 save game name
        all_info['index']=i

        #3 save index
        all_info['name'] = game_name

        #save image info into object.
        all_info['cover_image_info']['image_url'] = cover_image_url
        all_info['cover_image_info']['path'] = 'images/covers/'+str(i)+'.jpg'
        

        
        
        #4. open link

        element = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.LINK_TEXT, game_name))
        )
        
        url = element.get_attribute('href')
        all_info['next_page_url'] = url;
        element.click()
        
        
        time.sleep(2)
        
        #5-a check if there is a More button for info
        
        buttons = driver.find_elements_by_class_name('ScCoreLink-sc-udwpw5-0.gBXxId.tw-link')
        
        #handle if there's no game info, just abanden this game
        if len(buttons)<=0:
            driver.back()
            continue
        
        driver.back()

        data['item'].append(all_info)
        print(i)
        
    file =  open('dataInfo.json','w')
    json.dump(data, file)
    file.close()



    #all done, close the browser           
    driver.close()
    
except Exception as e:
    print(e)
    driver.close()
#check where scrolling need to be done


