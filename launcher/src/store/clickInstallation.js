import { defineStore } from "pinia";

export const useClickInstall = defineStore("clickInstallation", {
  state: () => {
    return {
      checkPointSync: "",
      selectedNetworks: "",
      installationPath: "/opt/stereum",
      selectedPreset: [],
      testnetPlugins: [],
      mainnetPlugins: [],
      installation: [
        {
          img: "/img/icon/one-click-installer.png",
          img2: "/img/icon/click-installation/click-installer.png",
          path: "/selectPlugin",
        },
        {
          img: "/img/icon/custom_installer.png",
          img2: "img/icon/click-installation/custom-nstallation.png",
          path: "/manage",
        },
        {
          img: "/img/icon/IMPORT_CONFIGURATIONS.png",
          img2: "/img/icon/click-installation/import.png",
          path: "/",
        },
      ],
      presets: [
        {
          id: 7,
          name: "staking",
          networkIcon: require("../../public/img/icon/click-installation/testnet-icon.png"),
          network: "testnet",
          defaultPath: "/opt/stereum",
          icon: require("../../public/img/icon/click-installation/staking-icon.png"),
          showDropDown: false,
          serviceAvailable: true,
          includedPlugins: [],
        },
        {
          id: 8,
          name: "staking",
          network: "mainnet",
          defaultPath: "/opt/stereum",
          networkIcon: require("../../public/img/icon/click-installation/mainnet-icon.png"),
          icon: require("../../public/img/icon/click-installation/staking-icon.png"),
          serviceAvailable: true,
          showDropDown: false,
          includedPlugins: [],
        },
        {
          id: 9,
          name: "Flashbots Mev Boost",
          networkIcon: require("../../public/img/icon/click-installation/testnet-icon.png"),
          network: "testnet",
          defaultPath: "/opt/stereum",
          icon: require("../../public/img/icon/presets-icons/mev-staking.png"),
          showDropDown: false,
          serviceAvailable: false,
          includedPlugins: [],
        },
        {
          id: 10,
          name: "Flashbots Mev Boost",
          network: "mainnet",
          defaultPath: "/opt/stereum",
          networkIcon: require("../../public/img/icon/click-installation/mainnet-icon.png"),
          icon: require("../../public/img/icon/presets-icons/mev-staking.png"),
          serviceAvailable: false,
          showDropDown: false,
          includedPlugins: [],
        },
        {
          id: 1,
          name: "ssv.network",
          network: "testnet",
          networkIcon: require("../../public/img/icon/click-installation/testnet-icon.png"),
          defaultPath: "/opt/stereum",
          icon: require("../../public/img/icon/click-installation/ssv-network.png"),
          serviceAvailable: true,
          includedPlugins: [],
        },
        {
          id: 5,
          name: "ssv.network",
          network: "mainnet",
          networkIcon: require("../../public/img/icon/click-installation/testnet-icon.png"),
          defaultPath: "/opt/stereum",
          icon: require("../../public/img/icon/click-installation/ssv-network.png"),
          serviceAvailable: false,
          includedPlugins: [],
        },
        {
          id: 2,
          name: "obol ssv",
          network: "mainnet",
          networkIcon: require("../../public/img/icon/click-installation/mainnet-icon.png"),
          defaultPath: "/opt/stereum",
          icon: require("../../public/img/icon/click-installation/OBOL_SSV.png"),
          serviceAvailable: false,
          includedPlugins: [],
        },
        {
          id: 4,
          name: "obol ssv",
          network: "testnet",
          networkIcon: require("../../public/img/icon/click-installation/mainnet-icon.png"),
          defaultPath: "/opt/stereum",
          icon: require("../../public/img/icon/click-installation/OBOL_SSV.png"),
          serviceAvailable: false,
          includedPlugins: [],
        },
        {
          id: 3,
          name: "rocketpool",
          network: "testnet",
          networkIcon: require("../../public/img/icon/click-installation/testnet-icon.png"),
          defaultPath: "/opt/stereum",
          icon: require("../../public/img/icon/click-installation/rocketpool.png"),
          serviceAvailable: false,
          includedPlugins: [],
        },
        {
          id: 6,
          name: "rocketpool",
          network: "mainnet",
          networkIcon: require("../../public/img/icon/click-installation/mainnet-icon.png"),
          defaultPath: "/opt/stereum",
          icon: require("../../public/img/icon/click-installation/rocketpool.png"),
          serviceAvailable: false,
          includedPlugins: [],
        },
      ],
      services: [
        {
          serviceName: "grafana",
          icon: "/img/icon/service-icons/grafana.png",
          linkUrl: "https://stereum.net",
        },
        {
          serviceName: "prometheus",
          icon: "/img/icon/service-icons/prometheus.png",
          linkUrl: "https://stereum.net",
        },
        {
          serviceName: "ssv",
          icon: "/img/icon/service-icons/ssv.png",
          linkUrl: "https://stereum.net",
        },
      ],
      filteredPluginsToChange: [],
    };
  },
  actions: {},
});
