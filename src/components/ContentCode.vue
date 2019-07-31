<template>
<div class="container">
            <div class="row">
                <form class="col s6" id="checkmail">
                    <div class="row">
                        <div class="input-field col s12">
                            <textarea class="materialize-textarea" v-model="Message" placeholder="Import text" rows="4"
                                cols="50"></textarea>
                        </div>
                    </div>
                </form>
                <pre class="col s6" style="background-color: #eaeaea">
                    <code class="col s6">{{ Message }}</code>
                </pre>
            </div>
        </div>  
</template>

<script>

export default {
  data () {
    return {
      Message: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
