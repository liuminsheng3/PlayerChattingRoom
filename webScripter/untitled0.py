

head='<p style="margin: 0 0 0;text-align: justify;font-family: Calibri;font-size: 14px;white-space: normal"><br/></p><p style="margin: 0 0 0;text-align: justify;font-family: Calibri;font-size: 14px;white-space: normal"><br/></p><p style="margin: 0 0 0;text-align: justify;font-family: Calibri;font-size: 14px;white-space: normal"><br/></p><p style="margin: 0px; text-align: center; font-family: Calibri; font-size: 14px; white-space: normal;"><img src="http://img.bj.wezhan.cn/content/sitefiles/2036641/images/'

count = 13829652

lists = ['2021-1-1.jpeg',
'2021-1-2.jpeg',
'2021-1-3.jpeg',
'2021-2-1.jpeg',
'2021-2-2.jpeg',
'2021-2-3.jpeg',
'2021-2-4.jpeg',
'2021-2-5.jpeg',
'2021-3-0.jpeg',
'2021-3-1.jpeg',
'2021-3-2.jpeg',
'2021-3-3.jpeg',
'2021-3-4.jpeg',
'2021-4-1.jpeg',
'2021-4-2.jpeg',
'2021-4-3.jpeg',
'2021-4-4.jpeg',
'2021-4-5.jpeg',
'2021-4-6.jpeg',
'2021-4-7.jpeg',
'2021-4-8.jpeg',
'2021-5-1.jpeg',
'2021-5-2.jpeg',
'2021-5-3.jpeg',
'2021-5-4.jpeg',
'2021-5-5.jpeg',
'2021-6-1.jpeg',
'2021-6-2.jpeg',
'2021-6-3.jpeg',
'2021-6-4.jpeg',
'2021-7-1.jpeg',
'2021-7-2.jpeg',
'2021-7-3.jpeg',
'2021-7-4.jpeg',
'2021-7-5.jpeg',
'2021-7-6.jpeg',
'2021-8-1.jpeg',
'2021-8-2.jpeg',
'2021-8-3.jpeg',
'2021-8-4.jpeg',
'2021-8-5.jpeg',
'2021-8-6.jpeg',
'2021-8-7.jpeg',
'2021-9-1.jpeg',
'2021-9-2.jpeg',
'2021-9-3.jpeg',
'2021-9-4.jpeg',
'2021-9-5.jpeg',
'2021-9-6.jpeg',
'2021-10-1.jpeg',
'2021-10-2.jpeg',
'2021-10-3.jpeg',
'2021-10-4.jpeg',
'2021-10-5.jpeg',
'2021-11-1.jpeg',
'2021-12-1.jpeg']
result = ''
for l in lists:
    temp = head + str(count)+'_'+l+'"/>'
    
    result = result + temp
    count = count+1

file = open('/Users/macbookpro/Downloads/result.html','w')
file.write(result)
file.close()

