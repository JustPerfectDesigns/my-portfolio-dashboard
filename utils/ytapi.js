// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'ad4881917dmsh288fb1d088b28e3p19170ajsne458fb829e67',
// 		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
// 	}
// };

// fetch('https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


export async function getCaptions() {
   const options = {
      method: 'GET',
      headers: {
         'X-RapidAPI-Key': process.env.YOUTUBE_V3_APIKEY,
         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
   };
   const response = await fetch('https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=50', options);
   const data = await response.json();
   return data;
}