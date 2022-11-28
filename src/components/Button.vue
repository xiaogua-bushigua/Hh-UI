<script setup lang="ts">
import { ref } from 'vue';

let loading = ref(false);
const handleClick = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

const code1 = `<hh-button>Default</hh-button>
<hh-button type="primary">Primary</hh-button>
<hh-button type="success">Success</hh-button>
<hh-button type="info">Info</hh-button>
<hh-button type="warning">Warning</hh-button>
<hh-button type="danger">Danger</hh-button>`

const code2 = `<hh-button plain>Plain</hh-button>
<hh-button type="primary" plain>Primary</hh-button>
<hh-button type="success" plain>Success</hh-button>
<hh-button type="info" plain>Info</hh-button>
<hh-button type="warning" plain>Warning</hh-button>
<hh-button type="danger" plain>Danger</hh-button>`

const code3 = `<hh-button round>Round</hh-button>
<hh-button type="primary" round>Primary</hh-button>
<hh-button type="success" round>Success</hh-button>
<hh-button type="info" round>Info</hh-button>
<hh-button type="warning" round>Warning</hh-button>
<hh-button type="danger" round>Danger</hh-button>`

const code4 = `<hh-button disabled>Round</hh-button>
<hh-button type="primary" disabled>Primary</hh-button>
<hh-button type="success" disabled>Success</hh-button>
<hh-button type="info" disabled>Info</hh-button>
<hh-button type="warning" disabled>Warning</hh-button>
<hh-button type="danger" disabled>Danger</hh-button>`

const code5 = `<hh-button type="primary" size="small">Small</hh-button>
<hh-button type="primary">Middle</hh-button>
<hh-button type="primary" size="large">Large</hh-button>`

const code6 = `<hh-button type="primary" prefixIcon="shoucang">收藏</hh-button>
<hh-button type="primary" suffixIcon="dianzan">点赞</hh-button>
<hh-button type="primary" prefixIcon="shoucang" suffixIcon="dianzan">双侧</hh-button>`

const code7 = `<hh-button @btnClick="handleClick" type="primary" prefixIcon="shuyi_jiazai" suffixIcon="xiazai" :loading="loading">下载</hh-button>`
</script>

<template>
  <div class="buttonPage">
    <hr class="divide" />
    <div class="btns">
      <div>
        <h3 class="btns-title">一、方形按钮</h3>
        <div class="btns-wrap">
          <hh-button>Default</hh-button>
          <hh-button type="primary">Primary</hh-button>
          <hh-button type="success">Success</hh-button>
          <hh-button type="info">Info</hh-button>
          <hh-button type="warning">Warning</hh-button>
          <hh-button type="danger">Danger</hh-button>
        </div>
        <div class="codesWrap">
          <highlightjs autodetect :code="code1" />
        </div>
      </div>
      <div>
        <h3 class="btns-title">二、方形镂空按钮</h3>
        <div class="btns-wrap">
          <hh-button plain>Plain</hh-button>
          <hh-button type="primary" plain>Primary</hh-button>
          <hh-button type="success" plain>Success</hh-button>
          <hh-button type="info" plain>Info</hh-button>
          <hh-button type="warning" plain>Warning</hh-button>
          <hh-button type="danger" plain>Danger</hh-button>
        </div>
        <div class="codesWrap">
          <highlightjs autodetect :code="code2" />
        </div>
      </div>
      <div>
        <h3 class="btns-title">三、圆角按钮</h3>
        <div class="btns-wrap">
          <hh-button round>Round</hh-button>
          <hh-button type="primary" round>Primary</hh-button>
          <hh-button type="success" round>Success</hh-button>
          <hh-button type="info" round>Info</hh-button>
          <hh-button type="warning" round>Warning</hh-button>
          <hh-button type="danger" round>Danger</hh-button>
        </div>
        <div class="codesWrap">
          <highlightjs autodetect :code="code3" />
        </div>
      </div>
      <div>
        <h3 class="btns-title">四、设置禁用</h3>
        <div class="btns-wrap">
          <hh-button disabled>Round</hh-button>
          <hh-button type="primary" disabled>Primary</hh-button>
          <hh-button type="success" disabled>Success</hh-button>
          <hh-button type="info" disabled>Info</hh-button>
          <hh-button type="warning" disabled>Warning</hh-button>
          <hh-button type="danger" disabled>Danger</hh-button>
        </div>
        <div class="codesWrap">
          <highlightjs autodetect :code="code4" />
        </div>
      </div>
      <div>
        <h3 class="btns-title">五、设置按钮大小</h3>
        <div class="btns-wrap">
          <hh-button type="primary" size="small">Small</hh-button>
          <hh-button type="primary">Middle</hh-button>
          <hh-button type="primary" size="large">Large</hh-button>
        </div>
        <div class="codesWrap">
          <highlightjs autodetect :code="code5" />
        </div>
      </div>
      <div>
        <h3 class="btns-title">六、前后置图标</h3>
        <div class="btns-wrap">
          <hh-button type="primary" prefixIcon="shoucang">收藏</hh-button>
          <hh-button type="primary" suffixIcon="dianzan">点赞</hh-button>
          <hh-button type="primary" prefixIcon="shoucang" suffixIcon="dianzan">双侧</hh-button>
        </div>
        <div class="codesWrap">
          <highlightjs autodetect :code="code6" />
        </div>
      </div>
      <div>
        <h3 class="btns-title">七、点击显示加载</h3>
        <div class="btns-wrap">
          <hh-button @btnClick="handleClick" type="primary" prefixIcon="shuyi_jiazai" suffixIcon="xiazai"
            :loading="loading">下载</hh-button>
        </div>
        <div class="codesWrap">
          <highlightjs autodetect :code="code7" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.buttonPage {
  margin: 40px 20px;
  width: 1000px;
  .divide {
    margin: 40px 20px;
  }

  .btns {
    margin: 0px 40px;

    &-title {
      margin: 20px 0;
    }

    &-wrap {
      display: flex;
      align-items: center;
    }
  }
}
button {
  margin: 0 20px;
}

</style>
