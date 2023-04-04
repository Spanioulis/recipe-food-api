import { dimensions } from '../../styles';

describe('dimensions', () => {
   it('should have spacing values that are strings and containing "rem"', () => {
      const { spacing } = dimensions;
      Object.entries(spacing).forEach(([_, spacingValue]) => {
         expect(typeof spacingValue === 'string').toBe(true);
         expect(spacingValue.endsWith('rem')).toBe(true);
      });
   });

   it('should have font values base that are strings and containing "rem"', () => {
      const { font } = dimensions;
      Object.entries(font).forEach(([_, fontValue]) => {
         expect(fontValue.endsWith('rem')).toBe(true);
         expect(typeof fontValue === 'string').toBe(true);
      });
   });

   it('should have borderRadius values that are strings', () => {
      const { borderRadius } = dimensions;
      Object.entries(borderRadius).forEach(([_, borderRadiusValue]) => {
         expect(typeof borderRadiusValue === 'string').toBe(true);
      });
   });
});
