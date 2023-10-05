const Hero = props => {
  return (
    <div class='container grid items-center gap-6 pb-8 pt-6 md:py-10'>
      <div class='flex max-w-[980px] flex-col items-start gap-2'><h1
        class='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl'>
          <span
            class='leading-12 block w-full bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text py-2 text-transparent lg:inline'>Üyelik İptali</span>
      </h1>
        <p class='max-w-[700px] text-lg text-muted-foreground sm:text-xl'>
          Abonelik iptali, bir hizmet veya ürün için yapılan abonelik anlaşmasının sonlandırılması işlemidir.
          Abonelikler genellikle belirli bir süre boyunca devam eder ve bu süre sona erdikten sonra otomatik olarak
          yenilenir. Abonelik iptali, abone olan kişinin veya kurumun bu hizmeti veya ürünü kullanmayı veya ödemeyi
          durdurmak istediği durumlarda gerçekleşir.
        </p>
      </div>
    </div>
  )
}

export default Hero
