// named exports
export const companyMixin = {
  data() {
    return {
      company: "Apple.inc",
      copyright: "Apple is an outcome of jobs' madness!",
    };
  },
  methods: {
    greetings() {
      console.log("Hello There");
    },
  },
};

const person = {
  name: "Subho Yadav",
  age: "23",
};

export { person };

// default export - There can be a single default export in node

export default {
  profession: "Software Engineer",
};

export const alias = "A variable imported using an import alias";
