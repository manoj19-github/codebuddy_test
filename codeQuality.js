// level {1/2/3}

//level 2

const getUsers=async()=>{
  let doc=await Promise.all([getUser,getProfile,getPosts]);
  let [user,profile,posts]=doc;
  const userProfile={user,profile,posts};
  return userProfile;
}
