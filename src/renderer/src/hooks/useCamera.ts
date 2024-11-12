export const useCamera = async () => {
  const devices = await navigator.mediaDevices.enumerateDevices()
  const cameras = devices.filter(device => device.kind === 'videoinput')

  return {
    devices,
    cameras
  }
}
