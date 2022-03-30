
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
    
    
    for i in range(3,51):

            
        """
        1. save image
        """
        
        #create temp variable, initial all the value
        all_info = {}
        all_info['cover_image_info'] = {}
        all_info['tags']=[]
        all_info['indx'] = -1
        all_info['name'] = "couldn't find name"
        all_info['cover_image_info'] = {}
        all_info['clips'] = []
        
        time.sleep(1)
        
        #find image element
        imageElement = driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div[1]/main/div[2]/div[3]/div/div/div/div/div[5]/div/div[1]/div['+str(i)+']/div/div/div/div/div[1]/div/a/div/div[5]/div/div/div/div/img')
        #focus the image element, used for scrolling 
        driver.execute_script('arguments[0].scrollIntoView()', imageElement)
        time.sleep(2)

                

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
        

        
        
        #4. open link to detail page

        element = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.LINK_TEXT, game_name))
        )
        element.click()
        
        time.sleep(2)
        
        #5-a check if there is a More button for info
        
        buttons = driver.find_elements_by_class_name('ScCoreLink-sc-udwpw5-0.gBXxId.tw-link')
        
        #handle if there's no game info, just abanden this game
        if len(buttons)<=0:
            driver.back()
            continue
        
        buttons[0].click()
        
        #save intro to temp variable
        all_info['intro'] = driver.find_element_by_xpath('/html/body/div[3]/div/div/div/div/div/div[2]/div/div/div[2]/div[3]/p/div/div/div/p').text
        
        
        #close the intro screen
        close_button = driver.find_element_by_xpath('/html/body/div[3]/div/div/div/div/div/div[1]/button')
        close_button.click()
        
        #find tags
        tags = driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div[1]/main/div[2]/div[3]/div/div/div/div/div/div[1]/div[2]/div/div[2]/div[2]/div[5]/div')
        
        tags = tags.find_elements_by_tag_name('a')
        

        #loop through tags and find each a tag inside it
        for tag in tags:
            tag_name = tag.find_element_by_tag_name('div').text
            all_info['tags'].append(tag_name)
            
        
        #enter the clip page
        clips = driver.find_element_by_link_text('Clips')
        clips.click()
        time.sleep(2)
        
        
        #find all the video that contain the cover image and videos
        clips_elements = driver.find_elements_by_class_name('Layout-sc-nxg1ff-0.cxWlKh')

        
        
        
        
        #go over each element in tag page
        for index,container in enumerate(clips_elements):
            
            clip_data = {}
            
            image_container = container.find_element_by_class_name('ScWrapper-sc-uo2e2v-0.aheuu.tw-hover-accent-effect')
            
            
            #find video cover image
            video_image = image_container.find_element_by_tag_name('img')
            #save video cover image to local file
            video_image_url = video_image.get_attribute('src')
            urllib.request.urlretrieve(video_image_url, 'images/clips/video_cover/'+str((i))+'_'+str((index+1))+'.jpg')  

            #save video cover iamge info
            #clip index
            clip_data['clip_index'] = str(i)+'_'+str((index+1))
            
            #clip image url
            clip_data['cover_url'] = video_image_url
            #clip image local path
            clip_data['cover_path'] = 'images/clips/video_cover/'+str((i))+'_'+str((index+1))+'.jpg'
            
            #find video length
            video_length = container.find_element_by_class_name('ScMediaCardStatWrapper-sc-1ncw7wk-0.bfxdoE.tw-media-card-stat')
            clip_data['video_length'] = video_length.text

            #find video views
            video_views = container.find_element_by_xpath('//div[5]/a/div/div[3]/div')
            video_views = video_views.text
            clip_data['video_views'] = video_views

            #find uploader container
            uploader_container = container.find_element_by_class_name('Layout-sc-nxg1ff-0.iIAhIi')
            
            #find uploader image url
            uploader_image = uploader_container.find_element_by_tag_name('img')
            uploader_image_url = uploader_image.get_attribute('src')
            
            #save uploader image to local
            urllib.request.urlretrieve(uploader_image_url, 'images/clips/user_photo/'+str((i))+'_'+str((index+1))+'_user.jpg')  
            
            #save uploader image url to clip variable
            clip_data['uploader_url'] = uploader_image_url
            #save uploader image local path to clip variable
            clip_data['uploader_path'] = 'images/clips/user_photo/'+str((i))+'_'+str((index+1))+'_user.jpg'
            
            
            #find uploader name
            uploader_name = uploader_container.find_element_by_xpath('.//div/div[1]/div[2]/p[1]/a')
            uploader_name = uploader_name.text
            clip_data['uploader_name'] = uploader_name
            
            #find video title
            uploader_video_title = uploader_container.find_element_by_xpath('.//div/div[1]/div[1]/div/a/h3')
            uploader_video_title = uploader_video_title.text
            clip_data['uploader_video_title'] = uploader_video_title


            #find video page link
            video_page = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.LINK_TEXT, uploader_video_title))
            )
            #open link
            clip_data['video_page_url'] = video_page.get_attribute('href')


            
            all_info['clips'].append(clip_data)



        """        
        for index,clip in enumerate(all_info['clips']):
            driver_temp = webdriver.Chrome('/Users/macbookpro/Downloads/chromedriver')
            driver_temp.get(clip[index]['video_page_url'])
            
            #find video link
            time.sleep(3)
            video_element = driver_temp.find_element_by_tag_name('video')
            video_url = video_element.get_attribute('src')
            #save link
            all_info['clips'][index]['video_url'] = video_url
            #save video
            urllib.request.urlretrieve(video_url, 'images/clips/videos/'+str((i))+'_'+str((index+1))+'_video.mp4') 
            #save video path
            all_info['clips'][index]['video_path'] = 'images/clips/videos/'+str((i))+'_'+str((index+1))+'_video.mp4'
            #go back
            driver.close()
        """
            
        #save temp data into data conatainer
        data['item'].append(all_info)

        #go back to the main page
        driver.back()
        driver.back()
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


