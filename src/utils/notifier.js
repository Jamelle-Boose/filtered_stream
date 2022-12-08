import notifier from "node-notifier"

export const sendDisconnectNotification = ([error]) => {
  const { title, disconnect_type } = error
  if (
    title === "operational-disconnect" &&
    disconnect_type === "OperationalDisconnect"
  ) {
    notifier.notify({
      title: "Twitter Stream Disconnected",
      message:
        "The Twitter stream has been disconnected for operational reasons. Please check the logs for more information.",
      appID: "Filtered Stream",
      icon: "img/notification.png",
      sound: true,
      wait: true,
    })
  }
}
