console.log('read')


const doGET = (path, callback) => {

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
         if (xhr.readyState == 4) {
        //     // The request is done; did it work?
            if (xhr.status == 200) {
        //         // ***Yes, use `xhr.responseText` here***
                callback(xhr.responseText);
            }
            else {
        //         // ***No, tell the callback the call failed***
                 callback(null);
      }
        }
    };
    xhr.open("GET", path);
    xhr.send();
}

const handleFileData = (fileData) =>  {
    if (!fileData) {
        // Show error
        return;
    }
    const json = JSON.parse(fileData)
    console.log(json.coords)
}
//
// // Do the request
doGET("./Milano Centrale Railway Station, Milan, Metropolitan City of Milan, ItalyStazione di Venezia Santa Lucia, Venice, Metropolitan City of Venice, Italy.json", handleFileData);
