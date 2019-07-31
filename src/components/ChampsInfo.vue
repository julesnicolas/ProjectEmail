<template>
        <div class="container">
            <div class="row">
                    <div class="row">
                        <div class="input-field col s6">
                            <input class="materialize-textarea"  v-model="programID" placeholder="Program ID" rows="6" cols="50" />
                        </div>
                        <div class="row">
                        <div class="input-field col s6">
                            <input class="materialize-textarea" v-model="AD_ID" placeholder="Ad ID" rows="6" cols="50" />
                        </div>
                    </div>
            </div>
        </div>
        </div>  
</template>
<script>
export default {
  data: {
    // declare message with an empty value
    AD_ID: '',
    programID: ''
  }
}
</script>
