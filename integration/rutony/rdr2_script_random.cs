using System;
using System.Collections.Generic;
using System.Threading;
using System.IO;
using WebSocketSharp;
using Newtonsoft.Json;

namespace RutonyChat {
    public class Script {
          public void RunScript(string site, string username, string text, string param) {
                using (var ws = new WebSocket("ws://127.0.0.1:9149"))
                {
                    ws.OnMessage += (sender, e) =>
                        Console.WriteLine("message from ChaosMod: " + e.Data);

                    ws.Connect();
                    var o = new
                    {
                        type = "activate-random-effect",
                        cause = username
                    };
                    ws.Send(JsonConvert.SerializeObject(o));

                }
          }
    }
}