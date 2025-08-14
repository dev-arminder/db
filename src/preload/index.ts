import { contextBridge, ipcRenderer } from "electron/renderer";

contextBridge.exposeInMainWorld("electronAPI", {
  saveMasterPassword: () => ipcRenderer.invoke("masterPassword:save"),
});
