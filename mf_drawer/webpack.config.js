// webpack.config.js do mf_drawe
new ModuleFederationPlugin({
  name: "mf_drawe",
  remotes: {
    mf_video: "mf_video@http://localhost:8082/remoteEntry.js",
  },
  shared: {
    react: { 
      singleton: true, 
      requiredVersion: "^18.0.0" 
    },
    "react-dom": { 
      singleton: true, 
      requiredVersion: "^18.0.0" 
    },
  },
});