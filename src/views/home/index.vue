<template>
    <div class="container">
        <!-- 文件上传拖拽 -->
        <div class="content_input">
            <input accept="image/png" type="file" @change="changeinput" multiple />
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    methods: {
        /** 文件上传 */
        changeinput(e) {
            console.log('q111', e.target.files)
            // let data = new FormData()
            // for (let i = 0; i < e.target.files.length; i++) {
            //     data.append('file', e.target.files[i])
            // }

            // UploadFilled(data).then((res) => {
            //     if (res) {
            //         console.log('获取文件的地址', res)
            //     }
            // })

        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;

    .content_input {
        padding: 24px;
    }
}
</style>