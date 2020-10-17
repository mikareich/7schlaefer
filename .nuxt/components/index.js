export { default as ConfigurationReference } from '../../components/ConfigurationReference.vue'

export const LazyConfigurationReference = import('../../components/ConfigurationReference.vue' /* webpackChunkName: "components/ConfigurationReference" */).then(c => c.default || c)
