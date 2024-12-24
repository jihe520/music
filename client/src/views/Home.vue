<template>
  <div class="home">
    <!-- 轮播图部分 -->
    <div class="banner-section">
      <el-carousel height="400px">
        <el-carousel-item v-for="banner in banners" :key="banner.id">
          <img :src="banner.pic" class="banner-img" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 推荐歌单部分 -->
    <div class="section">
      <h2 class="section-title">推荐歌单</h2>
      <div class="song-list-container">
        <div v-for="list in songLists" :key="list.id" class="song-list-item">
          <img :src="list.pic" class="cover-img" />
          <div class="list-title">{{ list.title }}</div>
        </div>
      </div>
    </div>

    <!-- 热门歌手部分 -->
    <div class="section">
      <h2 class="section-title">热门歌手</h2>
      <div class="singer-container">
        <div v-for="singer in singers" :key="singer.id" class="singer-item">
          <img :src="singer.pic" class="singer-img" />
          <div class="singer-name">{{ singer.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getBanners, getSongLists, getSingers } from '@/apis/home'

const banners = ref([])
const songLists = ref([])
const singers = ref([])

onMounted(async () => {
  try {
    const [bannersData, songListsData, singersData] = await Promise.all([
      getBanners(),
      // getSongLists(),
      // getSingers()
    ])
    banners.value = bannersData
    songLists.value = songListsData
    singers.value = singersData
  } catch (error) {
    console.error('获取数据失败:', error)
  }
})
</script>

<style scoped>
.home {
  padding: 20px;
}

.banner-section {
  margin-bottom: 40px;
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.song-list-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.song-list-item {
  cursor: pointer;
  transition: transform 0.3s;
}

.song-list-item:hover {
  transform: translateY(-5px);
}

.cover-img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 8px;
}

.list-title {
  margin-top: 8px;
  font-size: 14px;
  color: #333;
}

.singer-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
}

.singer-item {
  text-align: center;
  cursor: pointer;
}

.singer-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

.singer-name {
  margin-top: 8px;
  font-size: 14px;
  color: #333;
}
</style>