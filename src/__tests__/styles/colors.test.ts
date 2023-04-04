import { colors } from '../../styles';

describe('colors', () => {
   it('should have box shadow values that are strings and containing "rgba"', () => {
      Object.entries(colors).forEach(([_, colorValue]) => {
         if (typeof colorValue === 'string') {
            expect(colorValue).toContain('rgba');
         }
      });
   });
});
