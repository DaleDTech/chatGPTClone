
const App = () => {

  const getMessages = async () => {
    const API_KEY = process.env.REACT_APP_SECRET_KEY;

    const options = {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Explain compound interest to a first time saver" }],
        max_tokens: 2000,
      })

    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', options)
      const data = await response.json()
      console.log("Content Answer:")
      console.log(data.choices[0].message.content)
    }

    catch (error){
      console.error(error)

    }
  };

  return (
    <div className="App">
   
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history">
          <li> BLUGH </li>
        </ul>
      </section>
      <nav>
        <p> Made by Dale </p>
      </nav>
      <section className="main">
        <h1>Dale's GPT</h1>
        <ul className="feed">
          <div className="bottom-section">
            <div className="input-container">
              <input />
              <div id="submit" onClick={getMessages}>
                SUBMIT
              </div>
            </div>

            <p className="info">
              Free Research Preview. ChatGPT may produce inaccurate information
              about people, places, or facts. ChatGPT August 3 Version
            </p>
          </div>
        </ul>
      </section>
    </div>
  );
};

export default App;
