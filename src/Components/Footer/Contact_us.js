import React from "react";

const Contact_us = () => {
    return (
        <section>
            <h2>Отправить сообщению</h2>
            <form method="post" action="#">
                <div className="fields">
                    <div className="field half">
                        <input type="text" name="name" id="name" placeholder="Имя"/>
                    </div>

                    <div className="field half">
                        <input type="text" name="email" id="email" placeholder="Email"/>
                    </div>

                    <div className="field">
                        <input type="text" name="subject" id="subject" placeholder="Тема"/>
                    </div>

                    <div className="field">
                        <textarea name="message" id="message" rows="3" placeholder="Сообщение"></textarea>
                    </div>

                    <div className="field text-right">
                        <label>&nbsp;</label>

                        <ul className="actions">
                            <li><input type="submit" value="Отправить" className="primary"/></li>
                        </ul>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Contact_us