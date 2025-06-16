describe("PaymentDetails.vue – submit()", () => {
  it("führt submit() nur aus, wenn name UND email gesetzt sind", async () => {
    const { mount } = require("@vue/test-utils");
    const component =
      require("../../components/parts/PaymentDetails.vue").default;

    const wrapper = mount(component, {
      props: { isShow: true },
    });

    // Fall 1: Keine Eingaben → Kein Submit
    await wrapper.setData({ name: "", email: "" });
    await wrapper.vm.submit();
    expect(wrapper.vm.name).toBe("");
    expect(wrapper.vm.email).toBe("");
    expect(wrapper.emitted("close")).toBeFalsy();

    // Fall 2: Nur name → Kein Submit
    await wrapper.setData({ name: "Test", email: "" });
    await wrapper.vm.submit();
    expect(wrapper.emitted("close")).toBeFalsy();

    // Fall 3: Nur email → Kein Submit
    await wrapper.setData({ name: "", email: "test@example.com" });
    await wrapper.vm.submit();
    expect(wrapper.emitted("close")).toBeFalsy();

    // Fall 4: Beide vorhanden → Submit wird durchgeführt
    await wrapper.setData({ name: "Test", email: "test@example.com" });
    await wrapper.vm.submit();

    expect(wrapper.vm.name).toBe("");
    expect(wrapper.vm.email).toBe("");
    expect(wrapper.emitted("close")).toBeTruthy();
    expect(wrapper.emitted("close")!.length).toBe(1);
  });
});
