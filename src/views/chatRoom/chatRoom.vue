<template>
    <div>加入房间</div>

</template>

<script>
import { Room } from 'livekit-client';


export default {
    data() {
        return {
            wsRUL: "",
            token: ""
        }
    },
    //加入房间
    async mounted() {
        //创建新的房间
        // const room = new Room();
        // console.log('connected to room', room.name);
        // await room.connect(this.wsURL, this.token);
        // await room.localParticipant.enableCameraAndMicrophone();
    }
}
</script>

<style></style>