const {
    app,
    BrowserWindow,
} = require('electron')

const path = require('path')
const url = require('url')

app.on('ready', createWindow)

app.on('window-all-closed',()=>{
    if(process.platform!=='darwin'){
        app.quit()
    }
})

app.on('activate',()=>{
    if(win===null){
        createWindow()
    }
})

 function createWindow(){
    win=new BrowserWindow({
        width:400,
        height:400,
        maximizable:false
    })

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    win.on('closed', () => {
        win = null
    })
}



