import React, {lazy, Suspense} from "react";
// import Layout from "../Utils/LayoutMob";
// import FormMob from "../Utils/FormMob";

const Layout = lazy(()=>import('../Utils/LayoutMob'))
const FormMob = lazy(()=>import('../Utils/FormMob'))

const Form = () => {
  return (
    <Suspense fallback={<div className='load'>Loading...</div>}>
    <Layout>
      <div style={{paddingTop:'74px', paddingBottom:'10px'}}>
      <FormMob />
      </div>
    </Layout>
    </Suspense>
  );
};

export default Form;
