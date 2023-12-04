ZoomMtg.setZoomJSLib('https://source.zoom.us/2.18.0/lib', '/av')

ZoomMtg.preLoadWasm()
ZoomMtg.prepareWebSDK()
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load('en-US')
ZoomMtg.i18n.reload('en-US')

var authEndpoint = 'http://192.168.29.139:4000'
var sdkKey = 'v5fm6mneTg2_duhTVH3plA'
var meetingNumber = '84968100631'
var passWord = '123456'
var role = 1
var userName = 'JavaScript'
var userEmail = 'hope.so.meee@gmail.com'
var registrantToken = ''
var zakToken = 'eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IjROR3Z1TWYxVElpcGlYQlo2QnRGT3ciLCJpc3MiOiJ3ZWIiLCJzayI6IjAiLCJzdHkiOjEsIndjZCI6InVzMDUiLCJjbHQiOjAsImV4cCI6MTcwMTM0OTkwNywiaWF0IjoxNzAxMzQyNzA3LCJhaWQiOiJ4eUY0bFFIcFFwMkRJWGJiVXVTWDRRIiwiY2lkIjoiIn0.IBelf1JVbBvavOQ0_pXmCnQ0n6D-Qgi93t_MP8dYAsE'
var leaveUrl = 'http://192.168.29.139:8080'
//https://us05web.zoom.us/j/84701782148?pwd=Z4hk0agBiQITUsiTv4GZahMFxGZAUN.1
https://us05web.zoom.us/j/?pwd=RbvvDn82yk6VKXJWO2HRjCNTXe0WVl.1
/*
Join Zoom Meeting
https://us05web.zoom.us/j/82962241838?pwd=RbvvDn82yk6VKXJWO2HRjCNTXe0WVl.1

Meeting ID:  829 6224 1838
Passcode: Pgqt3B




*/ 
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

  document.getElementById('zmmtg-root').style.display = 'block'

  ZoomMtg.init({
    leaveUrl: leaveUrl,
    success: (success) => {
      console.log(success+"YYOYOYOYOYO"+meetingNumber+"UUUUUU")
      ZoomMtg.join({
        signature:signature,
        sdkKey: sdkKey,
        meetingNumber: meetingNumber,
        passWord: passWord,
        userName: userName,
        userEmail: userEmail,
        //tk: registrantToken,
        //zak: zakToken,
        success: (success) => {
          console.log(success)
        },
        error: (error) => {
          console.log(error)
        },
      })
    },
    error: (error) => {
      console.log(error)
    }
  })
}



function generateZoomSignature() {
  const iat = Math.round(new Date().getTime() / 1000) - 30;
  const exp = iat + 60 * 60 * 2;

  const oHeader = { alg: 'HS256', typ: 'JWT' };

  const oPayload = {
    sdkKey: "v5fm6mneTg2_duhTVH3plA",
    // mn: req.body.meetingNumber,
    role: "0",
    iat: iat,
    exp: exp,
    appKey: "v5fm6mneTg2_duhTVH3plA",
    tokenExp: iat + 60 * 60 * 2
  };

  const sHeader = b64EncodeUnicode(JSON.stringify(oHeader));
  const sPayload = b64EncodeUnicode(JSON.stringify(oPayload));

  // Concatenate the header and payload with a period separator
  const dataToSign = `${sHeader}.${sPayload}`;

  // Replace '1x1ncyg2imbnjpxfMu2J4JJpIHdGrpWq' with the actual Zoom SDK secret
  const signature = b64EncodeUnicode(hmacSHA256('1x1ncyg2imbnjpxfMu2J4JJpIHdGrpWq', dataToSign));

  return {
    signature: `${sHeader}.${sPayload}.${signature}`
  };
}

// Example usage:
try {
  const generatedSignature = generateZoomSignature();
  console.log(generatedSignature);
} catch (error) {
  console.error(error);
}

// Base64 Encode Unicode
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode('0x' + p1)));
}

// HMAC SHA-256 implementation
function hmacSHA256(key, data) {
  const keyBytes = new TextEncoder().encode(key);
  const dataBytes = new TextEncoder().encode(data);

  const result = sha256_HMAC(keyBytes, dataBytes);

  return b64EncodeUnicode(result);
}

// SHA-256 HMAC function (pure JavaScript)
function sha256_HMAC(key, data) {
  const shaObj = new jsSHA("SHA-256", "ARRAYBUFFER");
  shaObj.setHMACKey(key, "ARRAYBUFFER");
  shaObj.update(data);

  return shaObj.getHMAC("B64");
}

