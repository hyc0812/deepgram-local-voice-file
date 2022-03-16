# Play with a Speech-to-text API using Node.js

Let's login to your [Deepgram](https://console.deepgram.com/signup) , navigate to your **Dashboard** , and choose **Get a Transcript via API or SDK**:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qan1uxozd2upbf0ugp4p.png)

Click **reveal Key** and copy your **API KEY SECRET**:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9g8bxzv4og2kuhj1fe81.png)


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ze6rwmj6wouaofduiso4.png)

The next step, paste your **API KEY SECRET** into line 5 of your index.js, like the following:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jl8bk9g5oxi4fwlnry44.png)

Then let's replace line 8 and 9 with our voice file path and mimetype 
(Hint: use a new CLI to navigate to the directory where your voice file is located and use `pwd` to acquire absolute path):

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d0acb0h1bbsjs6w92tsz.png)

Now lastly let's run our application with the following command (Make sure you are at /sttApp):
```linux
node index.js
```
And you’ll receive a JSON response including a transcript that you want, including word arrays, timings, and confidence scores:


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vqmxsefmv78vbktl77jh.png)


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/un7ga4tyg0fo9fgmoma1.png)


Pretty COOL!

If you still get confused about the above content, please feel free to get my git repository here: [linkToGit](https://github.com/hyc0812/deepgram-local-voice-file.git)


### References
https://console.deepgram.com/project/850abca5-449a-47fa-8c40-6a463e59ad00/mission/transcript-via-api-or-sdk
https://dev.to/devteam/join-us-for-a-new-kind-of-hackathon-on-dev-brought-to-you-by-deepgram-2bjd
