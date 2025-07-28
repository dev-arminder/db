const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  saveMasterPassword: () => ipcRenderer.invoke('masterPassword:save')
})