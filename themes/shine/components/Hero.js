const Hero = props => {
  return (
    <div class='container grid items-center gap-6 pb-8 pt-6 md:py-10'>
      <div class='flex max-w-[980px] flex-col items-start gap-2'><h1
        class='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl'>
          <span
            class='leading-12 block w-full py-2 lg:inline'>Online İşlemler</span>
      </h1>
        <p class='max-w-[700px] text-lg text-muted-foreground sm:text-xl'>
          Sürekli koşturmaca içindeyseniz ve zamanınız değerliyse, Online İşlemler web sitemiz tam size göre! Sizlere zaman kazandıran, güvenilir ve kullanıcı dostu bir platform sunuyoruz.
        </p>
      </div>
    </div>
  )
}

export default Hero
