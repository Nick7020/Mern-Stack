const reels = [
  {
    username: "nikhil_dev",
    likeCount: 1240,
    isLike: false,
    commentCount: 86,
    caption: "Grinding daily 💻🔥 #codinglife",
    video: "reel1.mp4",
    userProfile: "https://example.com/profiles/nikhil.jpg",
    shareCount: 34,
    isFollowed: false
  },
  {
    username: "tech_guru",
    likeCount: 9820,
    isLike: true,
    commentCount: 412,
    caption: "React tips you should know 🚀",
    video: "reel2.mp4",
    userProfile: "https://example.com/profiles/techguru.jpg",
    shareCount: 210,
    isFollowed: false
  },
  {
    username: "code_daily",
    likeCount: 560,
    isLike: false,
    commentCount: 22,
    caption: "One problem a day keeps fear away 😄",
    video: "reel3.mp4",
    userProfile: "https://example.com/profiles/codedaily.jpg",
    shareCount: 12,
    isFollowed: false
  },
  {
    username: "frontend_master",
    likeCount: 4300,
    isLike: true,
    commentCount: 198,
    caption: "CSS animations are underrated 🎨",
    video: "reel4.mp4",
    userProfile: "https://example.com/profiles/frontend.jpg",
    shareCount: 76,
    isFollowed: true
  },
  {
    username: "backend_boy",
    likeCount: 2100,
    isLike: false,
    commentCount: 95,
    caption: "Node.js + MongoDB = ❤️",
    video: "reel5.mp4",
    userProfile: "https://example.com/profiles/backend.jpg",
    shareCount: 48,
    isFollowed: true
  },
  {
    username: "java_world",
    likeCount: 3890,
    isLike: true,
    commentCount: 175,
    caption: "DSA in Java hits different ☕",
    video: "reel2.mp4",
    userProfile: "https://example.com/profiles/java.jpg",
    shareCount: 90,
    isFollowed: false
  },
  {
    username: "mern_stack",
    likeCount: 7420,
    isLike: true,
    commentCount: 310,
    caption: "MERN roadmap for beginners 📌",
    video: "reel3.mp4",
    userProfile: "https://example.com/profiles/mern.jpg",
    shareCount: 165,
    isFollowed: true
  },
  {
    username: "dev_memes",
    likeCount: 15800,
    isLike: false,
    commentCount: 890,
    caption: "When code works without errors 😎",
    video: "reel1.mp4",
    userProfile: "https://example.com/profiles/memes.jpg",
    shareCount: 540,
    isFollowed: false
  },
  {
    username: "bug_hunter",
    likeCount: 910,
    isLike: false,
    commentCount: 40,
    caption: "Debugging at 2 AM be like 🐛",
    video: "reel2.mp4",
    userProfile: "https://example.com/profiles/bug.jpg",
    shareCount: 19,
    isFollowed: false
  },
  {
    username: "ui_ux_labs",
    likeCount: 6200,
    isLike: true,
    commentCount: 260,
    caption: "Good UI = Happy users ✨",
    video: "reel3.mp4",
    userProfile: "https://example.com/profiles/uiux.jpg",
    shareCount: 132,
    isFollowed: true
  }
];
var sum=''
reels.forEach(function(elem){
    sum=sum+`<div class="reel">
                    <video autoplay muted loop src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="love icon">${elem.isLike?'<i class="love ri-heart-3-fill"></i>':'<i class="love1 ri-heart-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share icon"><i class="ri-share-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu icon"><i class="ri-more-2-line"></i></h4>
                            <h6>0</h6>
                        </div>
                    </div>
                </div>`
})
var allreels=document.querySelector('.all-reels')
allreels.innerHTML=sum
