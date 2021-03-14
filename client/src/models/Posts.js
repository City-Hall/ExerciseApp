import Session from "./Session";
const posts = [
    { 
        src: "https://bulma.io/images/placeholders/1280x960.png",
        alt: "Placeholder image",
        caption: "Lorem Ipsom",
        time: Date(),
        user: {
            name: "John Smith",
            handle: "temp",
            pic: "https://bulma.io/images/placeholders/96x96.png"
        }
    },
    { 
        src: "https://bulma.io/images/placeholders/1280x960.png",
        alt: "Placeholder image",
        caption: "We want Moshiach Now",
        time: Date(),
        user: {
            name: "Kamala Harris",
            handle: "@johnsmith",
            pic: "https://bulma.io/images/placeholders/96x96.png"
        }
    },
    { 
        src: "https://bulma.io/images/placeholders/1280x960.png",
        alt: "Placeholder image",
        caption: "Have a wonderful day",
        time: Date(),
        user: {
            name: "Andrew",
            handle: "@Andrew",
            pic: "https://bulma.io/images/placeholders/96x96.png"
        }
    },
];

export function GetMyPosts(){
    return posts;
}

export function GetPostsForUser(id){
    return posts.filter( x=> x.user.handle == id );
}

export function addPost(post){
    posts.push({ 
        src: post.src,
        alt: "Placeholder image",
        caption: post.caption,
        time: Date(),
        user: {
            name: post.user.name,
            handle: post.user.handle,
            pic: post.user.pic,
        }
    });
}

export function GetMyFeed(i){
  return GetPostsForUser(Session.user.friends[i].handle);
}