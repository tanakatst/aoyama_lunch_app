import React from "react";

export const Top =()=>{
    return(
    <>
    <div className="container">
            <div className="mb-3">
                <label className="form-label">メールアドレス</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="メールアドレスを入力してください" />
            </div>
            <div className="mb-2">
                <label for="inputPassword5" className="form-label">パスワード</label>
                <div id="passwordHelpBlock" className="form-text text-danger">
                    パスワードは8-20文字で、文字列、数字を入れてかつスペースや特殊文字、絵文字を使用しないでください。
                </div> 
                <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" placeholder="パスワードを入力してください"/>
            </div>
            <div>
                <input type="password" id="inputPassword5" className="form-control mb-3" aria-describedby="passwordHelpBlock" placeholder="パスワードを再度入力してください"/>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
    </div>
    </>

    );
}