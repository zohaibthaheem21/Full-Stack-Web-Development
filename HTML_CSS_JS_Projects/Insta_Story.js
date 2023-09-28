var arr = [
    {dp:"https://images.unsplash.com/photo-1556347961-f9521a88cb8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1556347961-f9521a88cb8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",story:"https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1617922001439-4a2e6562f328?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1616091093714-c64882e9ab55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1556347961-f9521a88cb8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1556347961-f9521a88cb8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",story:"https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1617922001439-4a2e6562f328?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1616091093714-c64882e9ab55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"}
];

var clutter = ""

var st = document.querySelector("#storiyan");

arr.forEach(function(e,ind){
    clutter += `<div id="story">
    <img id="${ind}" src="${e.dp}" alt="">
</div>`
})

st.innerHTML = clutter;

st.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },2000)
})