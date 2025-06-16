describe('togglePromo', () => {
  const context: any = { showPromo: false };

  function togglePromo(count: number) {
    context.showPromo = count > 0 && count % 3 === 0;
  }

  it('should show promo if count is positive and divisible by 3', () => {
    togglePromo(3);
    expect(context.showPromo).toBe(true);
  });

  it('should not show promo if count is 0', () => {
    togglePromo(0);
    expect(context.showPromo).toBe(false);
  });

  it('should not show promo if count is negative', () => {
    togglePromo(-3);
    expect(context.showPromo).toBe(false);
  });

  it('should not show promo if count is not divisible by 3', () => {
    togglePromo(4);
    expect(context.showPromo).toBe(false);
  });
});
