<script>
  const websocketUrl = "ws://127.0.0.1:3001/cable";
  const roomId = "room";
  import ActionCable from "actioncable";

  const cable = ActionCable.createConsumer(websocketUrl);
  //   console.log("cable :>> ", cable);
  cable.subscriptions.create("RoomChannel", {
    room: "room",
  });
</script>

<!-- {cable} -->
