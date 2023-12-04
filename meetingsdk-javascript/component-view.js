const client = ZoomMtgEmbedded.createClient()

let meetingSDKElement = document.getElementById('meetingSDKElement')

var authEndpoint = 'http://192.168.29.139:4000'
var sdkKey = 'v5fm6mneTg2_duhTVH3plA'
var meetingNumber = '87561041407'
var passWord = '123456'
var role = 1
var userName = 'JavaScript'
var userEmail = 'hope.so.meee@gmail.com'
var registrantToken = ''
var zakToken = 'eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IjROR3Z1TWYxVElpcGlYQlo2QnRGT3ciLCJpc3MiOiJ3ZWIiLCJzayI6IjAiLCJzdHkiOjEsIndjZCI6InVzMDUiLCJjbHQiOjAsImV4cCI6MTcwMTM0OTkwNywiaWF0IjoxNzAxMzQyNzA3LCJhaWQiOiJ4eUY0bFFIcFFwMkRJWGJiVXVTWDRRIiwiY2lkIjoiIn0.IBelf1JVbBvavOQ0_pXmCnQ0n6D-Qgi93t_MP8dYAsE'
var leaveUrl = 'https://zoom.us'

function getSignature() {
  fetch(authEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      meetingNumber: meetingNumber,
      role: role
    })
  }).then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data)
    startMeeting(data.signature)
  }).catch((error) => {
  	console.log(error)
  })
}

function startMeeting(signature) {

  client.init({zoomAppRoot: meetingSDKElement, language: 'en-US'}).then(() => {
    client.join({
      signature: signature,
      sdkKey: sdkKey,
      meetingNumber: meetingNumber,
      password: passWord,
      userName: userName,
      userEmail: userEmail,
      tk: registrantToken,
      zak: zakToken
    }).then(() => {
      console.log('joined succesfully')
    }).catch((error) => {
      console.log(error)
    })
  }).catch((error) => {
    console.log(error)
  })
}
