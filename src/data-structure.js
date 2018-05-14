// @flow
export function WaterTypeFlow(name: string, type: string, cold: number, warm: number, deviceCount: number) {
  return {
    name,
    type,
    values: {
      cold,
      warm,
      deviceCount,
    },
    get flowSum() {
      return (this.values.cold + this.values.warm) * this.values.deviceCount;
    },
  };
}

const Vale = [
  'z perlatorem',
  'bez perlatora',
  'zmywarka',
  'pralka',
  'zawór spłukujący pisuar',
  'płuczka ciśnieniowa dn15',
  'płuczka ciśnieniowa dn20',
  'płuczka zbiornikowa',
];

const types = {
  dredgeValve: 'zawór czerpalny',
  dredgeBatteries: 'baterie czerpalne',
};
const initStructure = () => {
  return {};
};

export const waterState = [
  WaterTypeFlow('z perlatorem', types.dredgeValve, 0, 0, 0),
  {
    type: 'z perlatorem',
    values: {
      cold: 0,
      warm: 0,
      deviceCount: 0,
      get flowSum() {
        return 0;
      },
    },
  },
];

export default waterState;
