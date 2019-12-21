const myLink = {
  inp: document.querySelector('#inp')
}

myLink.inp.addEventListener('input', (e) => {
  let sumText = e.target.value,
      lng = sumText.length;

      if (!e.data){
        return;
    }else if (e.data.charCodeAt(0) > 64 && e.data.charCodeAt(0) < 91){
        return;
    }else if (e.data.charCodeAt(0) > 96 && e.data.charCodeAt(0) < 123){
        return;
    }else if (e.data.charCodeAt(0) > 1039 && e.data.charCodeAt(0) < 1103){
        return;
    }else if (e.data.charCodeAt(0) != 32){
        e.target.value = sumText.slice(0, lng - 1);
    }
});