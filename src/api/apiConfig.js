const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '755359d988bbea7c22cc34e2ce35fa16',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;