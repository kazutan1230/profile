import Image from 'next/image'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="flex min-h-screen flex-col items-center">
    {/* <!-- ナビゲーションバー --> */}
    <header className="py-4">
        <div className="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-14 w-full">
            <div className="text-3xl font-bold p-6">Activities</div>
            <div className="space-x-12 hidden md:flex items-center">
                <a href="#home" className="hover:text-selected-text transition-all duration-300">ホーム</a>
                <a href="#myself" className="hover:text-selected-text transition-all duration-300">自己紹介</a>
                <a href="#skills" className="hover:text-selected-text transition-all duration-300">スキル</a>
                <a href="#socials" className="hover:text-selected-text transition-all duration-300">地域・社会貢献</a>
            </div>
            {/* 隠された時のbarを押したときの実装は未 */}
            <div className="md:hidden">
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    </header>

    {/* <!-- ヒーローセクション --> */}
    <div id="home" className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="flex flex-wrap md:flex-nowrap">
            <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                <h1 className="font-zenKurenaido text-5xl text-center md:text-left lg:text-7xl md:text-6xl">
                    永井一輝<br />
                    ながやん
                </h1>
            </div>
            <img src="/images/wearing_glasses.jpg" alt="image" className="rounded-md cursor-pointer lg:top-2 lg:right-52 md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 lg:w-3/6" />
        </div>
    </div>

    {/* <!-- 自己紹介セクション --> */}
    <div id="myself"
    className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    >
        <section className="w-full">
            <h2 className="secondary-title">自己紹介</h2>
             <p className="section-paragraph font-zenKurenaido">こんにちは。まずは自己紹介をしていきます。</p>
            <div className="my-16">
                <div className="w-full border border-purple-300 p-16 lg:px-64 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-yellow-300 transition-all duration-300 cursor-pointer">
                    {/* <!-- 基本プロフィール --> */}
                    <div className="text-center flex flex-wrap justify-center lg:text-left lg:block md:text-left">
                        <h3 className="text-3xl font-semibold">基本プロフィール</h3>
                        <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto sm:justify-start mt-3 grid md:grid-cols-4 grid-cols-2">
                            <div className="flex mb-6">
                                <div className="badge">名前</div>  
                            </div>
                            <p className="text-secondary">
                                永井一輝
                                <br />
                                ながいかずき
                            </p>
                            <div className="flex mb-6">
                                <div className="badge">あだ名</div>  
                            </div>
                            <p className="text-secondary">
                                ながやん
                            </p>
                            <div className="flex mb-6">
                                <div className="badge">生年月日</div>  
                            </div>
                            <p className="text-secondary">
                                平成4年12月30日
                            </p>
                            <div className="flex mb-6">
                                <div className="badge">出身</div>  
                            </div>
                            <p className="text-secondary">
                                京都府
                            </p>
                            <div className="flex mb-6">
                                <div className="badge">特技</div>  
                            </div>
                            <p className="text-secondary">
                                どこにいても
                                東西南北が
                                大体分かること。
                                <br />
                                口笛。
                            </p>
                            <div className="flex mb-6">
                                <div className="badge">好きなもの</div>
                            </div>
                            <p className="text-secondary">
                                旅行。
                                <br />
                                車の運転。
                            </p>
                            <div className="flex mb-6">
                                <div className="badge">嫌いなもの</div>
                            </div>
                            <p className="text-secondary">
                                ミックスベジタブル。
                            </p>
                            <div className="flex mb-6">
                                <div className="badge">日々の楽しみ</div>
                            </div>
                            <p className="text-secondary">
                                街作りシミュレーションゲーム(SimCity、Cities: Skylines、Transport Fever等)で渋滞を解消すること。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-16">
                <div className="w-full border border-purple-300 p-16 lg:px-64 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-yellow-300 transition-all duration-300 cursor-pointer">
                    {/* <!-- どんな人 --> */}
                    <div className="text-center flex flex-wrap justify-center lg:text-left lg:block md:text-left">
                        <h3 className="text-3xl font-semibold">どんな人</h3>
                        <li>おもろいことが好き。</li>
                        <li>適当やけど適度に真面目。</li>
                        <li>フットワークが軽い。</li>
                        <li>本当は常にボーっとして生きていたい。</li>
                    </div>
                </div>
            </div>

            <div className="my-16">
                <div className="w-full border border-purple-300 p-16 lg:px-64 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-yellow-300 transition-all duration-300 cursor-pointer">
                    {/* <!-- 最近のマイブーム --> */}
                    <div className="text-center flex flex-wrap justify-center lg:text-left lg:block md:text-left">
                        <h3 className="text-3xl font-semibold">最近のマイブーム</h3>
                        <p>マルコメくんの恋路を応援して、ハラポンとくっつけようとハラスメントにならない程度にイジリ倒しつつ、たねむーが本当の気持ちに気付きつつあるという三角関係をニヤニヤしながら構築すること。</p>
                    </div>
                </div>
            </div>
        </section>
    </div>

    {/* <!-- スキル面セクション --> */}
    <div id="skills"
    className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    >
        <section className="w-full">
            <h2 className="secondary-title">スキル面</h2>
            <p className="section-paragraph font-zenKurenaido">私はラボでの開発を通じて、以下のスキルを実践的に向上させてきました。</p>
            <div className="my-16">
                <div className="w-full border border-purple-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-yellow-300 transition-all duration-300 cursor-pointer">
                    {/* <!-- 言語のロゴ --> */}
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 mb-6 lg:mb-0 self-center">
                        <img width="512" height="512" src="https://img.icons8.com/color/512/javascript--v1.png" alt="javascript--v1"/>
                        <img width="512" height="512" src="https://img.icons8.com/color/512/typescript.png" alt="typescript"/>
                    </div>

                    {/* <!-- スキルの説明 --> */}
                    <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                        <h3 className="text-3xl font-semibold">JavaScript & TypeScript</h3>
                        <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-6">
                            <div className="badge">ウェブサイト制作</div>
                            <div className="badge">ウェブアプリケーション開発</div>
                            <div className="badge">フロントエンド開発</div>
                        </div>
                        <p className="text-secondary">
                            JavaScriptとTypeScriptで開発を進めています。
                        </p>
                    </div>
                </div>
            </div>
            <div className="my-16">
                <div className="w-full border border-purple-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-blue-600 transition-all duration-300 cursor-pointer">
                    {/* <!-- 言語のロゴ --> */}
                    <div className="mb-6 lg:mb-0 self-center">
                    <i className="fa-brands fa-wordpress text-9xl"></i>
                    </div>

                    {/* <!-- スキルの説明 --> */}
                    <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                        <h3 className="text-3xl font-semibold">WordPress</h3>
                        <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-6">
                            <div className="badge">ウェブサイト制作</div>
                            <div className="badge">フロントエンド開発</div>
                        </div>
                        <p className="text-secondary">
                            ラボ公式サイト、こどもテックキャラバン公式サイトを作成しました。
                        </p>
                    </div>
                </div>
            </div>
            <div className="my-16">
                <div className="w-full border border-purple-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-orange-400 transition-all duration-300 cursor-pointer">
                    {/* <!-- 言語のロゴ --> */}
                    <div className="mb-6 lg:mb-0 self-center">
                        <i className="fa-brands fa-aws text-9xl"></i>
                    </div>

                    {/* <!-- スキルの説明 --> */}
                    <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                        <h3 className="text-3xl font-semibold">Amazon Web Services</h3>
                        <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-6">
                            <div className="badge">インフラ</div>
                            <div className="badge">クラウドサービス</div>
                            <div className="badge">バックエンド開発</div>
                        </div>
                        <p className="text-secondary">
                            AWSのサービスを使ってインフラ環境を整えています。
                        </p>
                    </div>
                </div>
            </div>
            <div className="my-16">
                <div className="w-full border border-purple-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-orange-400 transition-all duration-300 cursor-pointer">
                    {/* <!-- 言語のロゴ --> */}
                    <div className="mb-6 lg:mb-0 self-center">
                        <i className="fa-brands fa-linux text-9xl"></i>
                    </div>

                    {/* <!-- スキルの説明 --> */}
                    <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                        <h3 className="text-3xl font-semibold">Linux</h3>
                        <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-6">
                            <div className="badge">OS</div>
                            <div className="badge">バックエンド開発</div>
                        </div>
                        <p className="text-secondary">
                            元々少し知識はありましたが、実践的に開発をしたことでより理解が深まりました。
                        </p>
                    </div>
                </div>
            </div>

            <div className="my-16">
                <div className="w-full border border-purple-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-orange-400 transition-all duration-300 cursor-pointer">
                    {/* <!-- 言語のロゴ --> */}
                    <div className="grid lg:grid-cols-3 md:grid-cols-1 mb-6 lg:mb-0 self-center">
                        <i className="fa-brands fa-git text-9xl"></i>
                        <i className="fa-brands fa-github text-9xl"></i>
                        <i className="fa-brands fa-docker text-9xl"></i>
                    </div>

                    {/* <!-- スキルの説明 --> */}
                    <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                        <h3 className="text-3xl font-semibold">Git & GitHub & Docker</h3>
                        <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-6">
                            <div className="badge">開発ツール</div>
                            <div className="badge">インフラ</div>
                        </div>
                        <p className="text-secondary">
                            各種開発ツールで開発を便利にしています。
                        </p>
                    </div>
                </div>
            </div>

            <div className="my-16">
                <div className="w-full border border-purple-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-orange-400 transition-all duration-300 cursor-pointer">
                    {/* <!-- 言語のロゴ --> */}
                    <div className="grid lg:grid-cols-3 md:grid-cols-1 mb-6 lg:mb-0 self-center">
                        <img width="512" height="512" src="https://ichigojam.github.io/logo/logo_ichigojam_color.png" alt="ichigojam"/>
                    </div>

                    {/* <!-- スキルの説明 --> */}
                    <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                        <h3 className="text-3xl font-semibold">Ichigojam</h3>
                        <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-6">
                            <div className="badge">プログラミング教育</div>
                            <div className="badge">電子工作教育</div>
                        </div>
                        <p className="text-secondary">
                            子どもたちへのプログラミング教育を通じ、分かりやすい説明や表現を学んでいます。
                            また、自身も電子工作することで難しい又は危険なポイントを理解ました。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>

    {/* <!-- 地域・社会貢献面 --> */}
    <div id="socials"
    className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    >
        <section className="w-full">
            <h2 className="secondary-title">地域・社会貢献面</h2>
             <p className="section-paragraph font-zenKurenaido">ラボに来て以降様々な経験をしました。</p>
        </section>
    </div>

    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-6">
        <img src="/images/teckcaravan.JPG"
        alt=""
        className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" />
        <div>
            <h3 className="text-3xl font-semibold">こどもテックキャラバン</h3>
            <p className="text-secondary font-zenKurenaido">
                　現地参加前に公式LINE作成や公式サイト作成に携わりました。
                参加申込をLINEトーク画面からして、
                自動でスプレッドシートに吐き出すシステム開発を主に担当したが、
                最初に使用するサービス選択の重要性を思い知りました。
            </p>
            <p className="text-secondary font-zenKurenaido">
                　また、子どもたちに喜んでもらおうと電子工作やプログラミング問題の事前作成に取り組みました。
                どのような環境で行われるかやどんな子が来るのかの想像が足りず、
                あまり活躍の場がありませんでした。オンラインの時代でも、現場主義は健在と痛感しその場に行くことの大事だと学びました。
            </p>
            <p className="text-secondary font-zenKurenaido">
                　実際に教えてみると子どもたちは僕の想定より上手にできることがよく分かりました。
                確かに、できる子となかなかできない子はいますが、
                その差を埋めてあげるというのが難しいということが分かってきました。
                つまり、手を出し過ぎるとその子から考えることを奪ってしまうし、
                うまくヒントを出せないと他の子との差が開いてその子は嫌気が差してしまいます。
                教え加減のバランス感覚を今後も鍛えていく必要があると考えています。
            </p>
            <p className="text-secondary font-zenKurenaido">
                　体験の時間では親子揃って楽しむ姿が印象的でした。
                その際に広島の現地サポーターのスタッフ達の地元の魅力を発信したいという強い気持ちに共鳴しました。
                常日頃から我が国の良さは日本各地の地方にあると考えてきましたが、
                やはり実際に現地で話をすると確信に変化しました。
            </p>
        </div>
        <div>
            <h3 className="text-3xl font-semibold">AMATAR STUDY</h3>
            <p className="text-secondary font-zenKurenaido">
                　担当のセミナーにサポートスタッフとして毎回参加させてもらっています。
                まず、講義を担当される方の教え方の上手さを盗ませてもらっています。
                関連する小噺であったり、時間内に終わらせる技術を僕自身学ばせてもらっている感覚でいます。
                受講生の皆さんも仕事終わってから参加されたり、
                アーカイブ動画を見て復習されたりしている方達が多いので、
                その向上心は見習うべきです。
            </p>
            <p className="text-secondary font-zenKurenaido">
                　広島でも感じたことですが、人によって差があるのは同様で、
                サラッと付いていける人もいれば、タイピングミスでもたつく人もいるという感じです。
                順調に進んでいる時は適当に褒めているだけで良いので、
                比較的楽ができますが、
                タイピングミスでエラーが出ている時は中々原因を見付けられず苦労します。
                時間がかかってしまう事もあり、そうなると時間内に追い付いてもらうのは厳しいです。
                大丈夫そうな場合でも巡回して様子を見ておくようにしています。
            </p>
            <p className="text-secondary font-zenKurenaido">
                　対面であればすぐに質問できるのだが、オンラインでは難しい参加者もいるようです。
                セミナーを止めてしまうのを躊躇う心情もあるでしょうし、
                こちらも画面越しでは悪戦苦闘している様子が見えないので、
                積極的に質問を促す、ある程度の線でレベル別グループ分けをするといった対応が必要になると考えています。
            </p>
            <p className="text-secondary font-zenKurenaido">
                　滝沢市に税金を納めている身でもあるし、
                運営側だけでなく参加者としての気持ちも知ることが有益と判断したため、
                AMATAR STUDYの別のセミナーに業務外で参加させてもらいました。
                個々人の目標が何かは分からないが、
                確かに熱いものを持った大人たちとグループワークをして、
                高めあう環境があると実感し、
                そういう場を提供していくということを意識してスタッフをするように心掛けるようになりました。
            </p>
        </div>
        <img src="/images/amatar_study.jpg"
        alt=""
        className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" />
        <img src="/images/firefighter.png"
        alt=""
        className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" />
        <div>
            <h3 className="text-3xl font-semibold">消防団活動</h3>
            <p className="text-secondary font-zenKurenaido">
                火の用心。
            </p>
        </div>
    </div>
    </main>
  )
}
