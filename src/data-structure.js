// @flow
export function createWaterFlowObject(type: string, name: string, coldWater: number = 0, warmWater: number = 0) {
  const cold = coldWater;
  const warm = warmWater;
  const sourceType = type;
  const sourceName = name;
  let deviceCount = 0;
  let useWarmWater = true;
  return {
    get type() {
      return sourceType;
    },
    set useWarmWater(value: boolean) {
      useWarmWater = value;
    },
    get useWarmWaterNormativeFlow() {
      return useWarmWater;
    },
    get name() {
      return sourceName;
    },
    set deviceCount(value: number) {
      deviceCount = value;
    },
    get deviceCount() {
      return deviceCount;
    },
    get cold() {
      return cold;
    },
    get warm() {
      return warm;
    },
    get flowSum() {
      const normativeWaterFlow = useWarmWater ? cold + warm : cold;
      return normativeWaterFlow * deviceCount;
    },
  };
}

const vale = [
  ['z perlatorem', 0.15],
  ['bez perlatora', 0.5],
  ['zmywarka', 0.15],
  ['pralka', 0.25],
  ['zawór spłukujący pisuar', 0.3],
  ['płuczka ciśnieniowa dn15', 0.7],
  ['płuczka ciśnieniowa dn20', 1],
  ['płuczka zbiornikowa', 0.13],
];
const battery = [
  ['natrysk', 0.15, 0.15],
  ['wanna', 0.15, 0.15],
  ['zlewozmywak', 0.07, 0.07],
  ['umywalka', 0.07, 0.07],
  ['bidet', 0.07, 0.07],
];

const types = {
  dredgeValve: 'zawór czerpalny',
  dredgeBatteries: 'baterie czerpalne',
};
export default () => {
  const valveArray = vale.map(elem => createWaterFlowObject(types.dredgeValve, ...elem));
  const batteryArray = battery.map(elem => createWaterFlowObject(types.dredgeValve, ...elem));
  return { drawOffPoints: [...valveArray, ...batteryArray] };
};
