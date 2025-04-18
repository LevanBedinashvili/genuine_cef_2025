function createHudInterface() {
	const hoodContainer = document.getElementById('hood');
	hoodContainer.innerHTML = `
		<div class="background-shadow"></div>

		<div class="rightGift" style="align-items: center">
			<div class="rightSidebar">
				<div class="logo-main">
					<img src="img/favicon.png" alt="" style="width: 70px; height: 70px;">
				</div>
			</div>
			<div class="divlogo">
				<div class="statisticsLeftTwo">
					<div class="wanteddivv" style="margin-top: 10px; margin-right: 20px;">
						<p class="datetext" id="clock">15:28</p>
						<div class="datebackground">
							<p class="month" id="month">ივნისი</p>
						</div>
					</div>
				</div>
			</div>

			<div class="divlogo">
				<div class="statisticsLeftTwo">
					<div class="wanteddivv" style="margin-top: 10px; margin-right: 20px; display: inline-flex;">
						<p class="datetext"><img src="img/wifi.webp" style="width: 30px; height: 30px;"></p>
						<p class="datetext" id="players" style="font-size: 25px; display: inline-flex; margin-left: 10px;">0</p>
					</div>
					<div class="wanteddivv" style="margin-top: 10px; margin-right: 20px; display: inline-flex;">
						<p class="datetext"><img src="img/user.png" style="width: 30px; height: 30px;"></p>
						<p class="datetext" id="playerid" style="font-size: 25px; display: inline-flex; margin-left: 10px;">0</p>
					</div>
				</div>
			</div>
		</div>

		<div class="rightTwo">
			<div class="mainDiv">
				<div class="progressHealth">
					<img src="img/heart.png" class="statisticsimg" alt="">
					<a id="healths" class="centered">0</a>
				</div>
				<div class="progressHealth">
					<img src="img/vest.png" class="statisticsimg" alt="">
					<a id="armors" class="centered">0</a>
				</div>
				<div class="ammo">
					<img id="weapon" class="statisticsimg" src="img/weapons/6.png" alt="">
				</div>
			</div>
		</div>

		<div class="right">
			<div class="gifttimer" id="giftbox">
				<div class="giftzone">
					<div class="giftTexts">
						<p class="textgift" style="font-weight: 600;">საჩუქარი</p>
						<p class="textgift" id="giftboxtime" style="text-align: center;">0h 0m</p>
					</div>
					<img src="./img/gift-box-icon.webp" class="giftimage" alt="">
				</div>
			</div>
		</div>

		<div class="right">
			<div class="rightSidebarTwo">
				<div class="statisticsLeftTwo">
					<div class="wanteddiv">
						<img src="./img/star.png" id="wanted1" class="wantedimg">
						<img src="./img/star.png" id="wanted2" class="wantedimg">
						<img src="./img/star.png" id="wanted3" class="wantedimg">
						<img src="./img/star.png" id="wanted4" class="wantedimg">
						<img src="./img/star.png" id="wanted5" class="wantedimg">
						<img src="./img/star.png" id="wanted6" class="wantedimg">
					</div>
				</div>
			</div>
		</div>

		<div class="right">
			<div class="rightSidebarTwo">
				<div class="statisticsLeftTwo">
					<div class="moneydiv">
						<img src="./img/wallet.png" class="moneystats">
						<p id="m" class="cash">0</p>
					</div>
					<div class="moneydiv">
						<img src="./img/card.png" class="moneystats">
						<p id="pBank" class="bank">0</p>
					</div>
				</div>
			</div>
		</div>

		<div class="left-area">
			<div class="navBar">
				<div class="menu">
					<div class="square"><img src="img/ICONS/microphone.png" class="iconsImage" alt=""></div>
					<h2>Z</h2>
				</div>
				<div class="menu">
					<div class="square"><img src="img/radio.png" class="iconsImage" alt=""></div>
					<h2>X</h2>
				</div>
				<div class="menu">
					<div class="square"><img src="img/ICONS/inventory.png" class="iconsImage" alt=""></div>
					<h2>Y</h2>
				</div>
				<div class="menu">
					<div class="square"><img src="img/ICONS/engine.png" class="iconsImage" alt=""></div>
					<h2>2</h2>
				</div>
			</div>
		</div>

        	<div class="middlebottom">
		<div class="gifttimer" id="channel" style="display: none;">
			<div class="giftzone">
				<div class="giftTexts">
					<p class="textgiftFirst" style="font-size: 17px;">STREAM ON:</p>
					<p class="textgift" id="channelname" style="text-align: center; font-weight: 900;">Genuine Project</p>
				</div>
				<img src="img/youtube.webp" class="giftimage" alt="">
			</div>
		</div>
	</div>

	<div id="notification-bar" class="notification hidden">
		<span id="icon" class="icon">&#128712;</span>
		<span id="message"></span>
	</div>

	<div class="hud-right-bot" id="status_speedometer">
		<div class="hud-speedometer">
			<svg id="test" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27.5vh"
				height="22.4vh" viewBox="-4 -10 275 214" preserveAspectRatio="xMaxYMin meet">
				<path fill-rule="evenodd" stroke="rgb(255, 255, 255)" stroke-width="0.6vh" stroke-linecap="butt"
					stroke-linejoin="miter" opacity="0.4" fill="none"
					d="M224.989,204.006 C276.978,152.089 276.978,67.914 224.989,15.997" />
				<path id="hud-fuel" fill-rule="evenodd" stroke="#fa6f71" stroke-width="1vh" stroke-linecap="butt"
					stroke-linejoin="miter" opacity="1" fill="none"
					d="M224.989,204.006 C276.978,152.089 276.978,67.914 224.989,15.997 "
					style="stroke-dasharray: 208.907, 208.907; stroke-dashoffset: 208.896;" />
				<path fill-rule="evenodd" stroke="rgb(255, 255, 255)" stroke-width="0.6vh" stroke-linecap="butt"
					stroke-linejoin="miter" opacity="0.4" fill="none"
					d="M60.340,185.660 C18.553,143.874 18.553,76.126 60.340,34.340 C102.126,-7.447 169.874,-7.447 211.660,34.340 C253.446,76.126 253.446,143.874 211.660,185.660 " />
				<path id="hud-speedometer" fill-rule="evenodd" stroke="rgb(255, 222, 92)" stroke-width="1vh"
					stroke-linecap="butt" stroke-linejoin="miter" opacity="1" fill="none"
					d="M60.340,185.660 C18.553,143.874 18.553,76.126 60.340,34.340 C102.126,-7.447 169.874,-7.447 211.660,34.340 C253.446,76.126 253.446,143.874 211.660,185.660 "
					style="stroke-dasharray: 504.295, 504.295; stroke-dashoffset: 504.267;" />
			</svg>
			<div class="hud-speed-text">
				<div>
					<span id="textspeed" style="font-family: 'BPG Nateli Mtavruli', sans-serif;"></span>
				</div>
				<p style="font-family: 'BPG Nateli Mtavruli', sans-serif; color: #917b7b;">KM/H</p>
			</div>
			<div class="hud-engine-text" id="healproc"></div>
		</div>
		<div class="hud-speedomter-footer">
			<div id="eng" class="hud-speedomter-footer-item ctrl off"></div>
			<div id="door" class="hud-speedomter-footer-item door off"></div>
			<div class="hud-speedomter-footer-item">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmlld0JveD0iMCAwIDg2LjY2NjY2NCA4NS4zMzMzMzYiCiAgIGhlaWdodD0iODUuMzMzMzM2IgogICB3aWR0aD0iODYuNjY2NjY0IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIj48bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE4Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICAgIGlkPSJkZWZzNiI+PGNsaXBQYXRoCiAgICAgICBpZD0iY2xpcFBhdGgxOCIKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aAogICAgICAgICBpZD0icGF0aDE2IgogICAgICAgICBkPSJNIDAsNjQgSCA2NSBWIDAgSCAwIFoiIC8+PC9jbGlwUGF0aD48L2RlZnM+PGcKICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjMzMzMzMzMsMCwwLC0xLjMzMzMzMzMsMCw4NS4zMzMzMzMpIgogICAgIGlkPSJnMTAiPjxnCiAgICAgICBpZD0iZzEyIj48ZwogICAgICAgICBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGgxOCkiCiAgICAgICAgIGlkPSJnMTQiPjxwYXRoCiAgICAgICAgICAgaWQ9InBhdGgyMCIKICAgICAgICAgICBzdHlsZT0iZmlsbDojZmE2ZjcxO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICAgIGQ9Im0gNjEsNDkgaCAtNCB2IDQgaCA0IHogTSA0MCw0MCBIIDEyIFYgNTYgSCA0MCBaIE0gNjEsNjIgViA1NyBIIDUzIFYgNDUgaCA4IFYgMTIgYyAwLC0xLjEwMyAtMC44OTYsLTIgLTIsLTIgLTEuMTA0LDAgLTIsMC44OTcgLTIsMiB2IDE4LjA4MyBjIDAsNS41MTQgLTQuNDg2LDEwIC0xMCwxMCBWIDU2IGMgMCw0LjQgLTMuNiw4IC04LDggSCAxMyBDIDguNiw2NCA1LDYwLjQgNSw1NiBWIDYgSCAwIFYgMCBoIDUyIHYgNiBoIC01IHYgMzAuMDgzIGMgMy4zMDksMCA2LC0yLjY5MSA2LC02IFYgMTIgYyAwLC0zLjMwOSAyLjY5MSwtNiA2LC02IDMuMzA5LDAgNiwyLjY5MSA2LDYgdiA1MCB6IiAvPjwvZz48L2c+PC9nPjwvc3ZnPg==">
			</div>
		</div>
	</div>
</div>
	`;
}

function createRadialMenu() {
    const radialContainer = document.getElementById('radial');

    radialContainer.innerHTML = `
        <section id="radialka" class="radialka" style="display: none;">
            <div class="test">
    
                <svg width="364" height="200" viewBox="0 0 364 205" fill="none" xmlns="http://www.w3.org/2000/svg" id="fist" class="fist" onclick="ClickRadial(0)">
                    <path d="M109.622 189.363L3.0211 82.7626C50.6915 35.6495 115.029 9.20584 182.092 9.20583C249.156 9.20583 313.493 35.6495 361.163 82.7626L254.563 189.363C235.167 170.518 209.174 159.955 182.092 159.955C155.01 159.955 129.017 170.518 109.622 189.363Z" fill="black" fill-opacity="0.7" stroke="#166afbcf" stroke-width="3"/>
                </svg>
                <svg width="364" height="200" viewBox="0 0 364 205" fill="none" xmlns="http://www.w3.org/2000/svg" id="two" onclick="ClickRadial(1);">
                    <path d="M109.622 189.363L3.0211 82.7626C50.6915 35.6495 115.029 9.20584 182.092 9.20583C249.156 9.20583 313.493 35.6495 361.163 82.7626L254.563 189.363C235.167 170.518 209.174 159.955 182.092 159.955C155.01 159.955 129.017 170.518 109.622 189.363Z" fill="black" fill-opacity="0.7" stroke="#166afbcf" stroke-width="3"/>
                </svg>
                <svg width="364" height="200" viewBox="0 0 364 205" fill="none" xmlns="http://www.w3.org/2000/svg" id="three" onclick="ClickRadial(2);">
                    <path d="M109.622 189.363L3.0211 82.7626C50.6915 35.6495 115.029 9.20584 182.092 9.20583C249.156 9.20583 313.493 35.6495 361.163 82.7626L254.563 189.363C235.167 170.518 209.174 159.955 182.092 159.955C155.01 159.955 129.017 170.518 109.622 189.363Z" fill="black" fill-opacity="0.7" stroke="#166afbcf" stroke-width="3"/>
                </svg>
                <svg width="364" height="200" viewBox="0 0 364 205" fill="none" xmlns="http://www.w3.org/2000/svg" id="four" onclick="ClickRadial(3);">
                    <path d="M109.622 189.363L3.0211 82.7626C50.6915 35.6495 115.029 9.20584 182.092 9.20583C249.156 9.20583 313.493 35.6495 361.163 82.7626L254.563 189.363C235.167 170.518 209.174 159.955 182.092 159.955C155.01 159.955 129.017 170.518 109.622 189.363Z" fill="black" fill-opacity="0.7" stroke="#166afbcf" stroke-width="3"/>
                </svg>
                <img src="img/ph_engine-bold.svg" class="engine">
                <img src="img/ph_lock-bold.svg" class="lock">
                <img src="img/mdi_car-light-dimmed.svg" class="light">
                <img src="img/close.svg" class="key">
            </div>
        </section>
    `;
}


const currentInterface = document.getElementById('radialka');
function ClickRadial(event) {
    let click = event;
    switch (click) {
        case 0:
            {
                turnEngine();
                break;
            }
        case 1:
            {
                lockDoors();
                break;
            }
        case 2:
            {
                turnLights();
                break;
            }
        case 3:
            {
                closeRadial();
                break;
            }
    }
};


function turnEngine(){
    cef.emit('radial:engine');
}
function turnLights(){
    cef.emit('radial:lights');
}
function lockDoors(){
    cef.emit('radial:doors');
}
function closeRadial(){
    cef.emit('radial:close');
    currentInterface.style = "display: none;";
}



function createCefShop() {
    const shopContainer = document.getElementById('shop');

    shopContainer.innerHTML = `
        <div class="shop_wrapper" >
            <div class="content">
                <div class="leftside">
                    <div class="logotype_shop">
                        <div>
                            <img src="./img/basket.webp">
                        </div>
                        <div style="display: flex; flex-direction: column; font-size: 40px; text-align: center; align-items:center; height: 100px; margin-top: 30px; gap: 20px;">
                            <p>S</p>
                            <p>H</p>
                            <p>O</p>
                            <p>P</p>
                        </div>
                    </div>
                    <div class="exit" style="
                        text-align: center; /* Aligns the button to the center of the div */
                        padding: 20px; /* Adds padding inside the div */
                        background-color: #f4f4f4; /* Sets a light background for the div */
                        border-radius: 10px; /* Rounds the corners of the div */
                    
                    " onclick="clickShop(0)">
                        გამოსვლა
                    </div>
                </div>
                <div class="rightside">
                    <div class="wrapper_product">
                        <div class="block"><p>ტელეფონი</p>
                             <div class="images"><img src="./img/phone.png" style="width: 114px; height: 114px;"></div> 
                             <p class="price">$10,00</p> 
                             <div class="buy_wrapper">
                                <div class="btn" onclick="clickShop(1)">ყიდვა</div>
                            </div>
                        </div>
                        <div class="block"><p>ნომერი</p>
                            <div class="images"><img src="./img/simcard.png" style="width: 114px; height: 114px;"></div> 
                            <p class="price">$10,00</p> 
                            <div class="buy_wrapper">
                               <div class="btn" onclick="clickShop(2)">ყიდვა</div>
                           </div>
                       </div>
                        <div class="block"><p>მედიკამენტი</p>
                            <div class="images"><img src="./img/firstaidkit.webp" style="width: 114px; height: 114px;"></div> 
                            <p class="price">$20,00</p> 
                            <div class="buy_wrapper">
                                <div class="btn" onclick="clickShop(3)">ყიდვა</div>
                            </div>
                        </div>
                        <div class="block"><p>თოკი</p>
                            <div class="images"><img src="./img/rope.webp" style="width: 114px; height: 114px;"></div> 
                            <p class="price">$20,00</p> 
                            <div class="buy_wrapper">
                                <div class="btn" onclick="clickShop(4)">ყიდვა</div>
                            </div>
                        </div>
                        <div class="block"><p>ნიღაბი</p>
                            <div class="images"><img src="./img/mask.png" style="width: 114px; height: 114px;"></div> 
                            <p class="price">$20,00</p> 
                            <div class="buy_wrapper">
                                <div class="btn" onclick="clickShop(5)">ყიდვა</div>
                            </div>
                        </div>
                        <div class="block"><p>ბუმ-ბოქსი</p>
                            <div class="images"><img src="./img/boom-box.webp"></div> 
                            <p class="price">$30,00</p> 
                            <div class="buy_wrapper">
                                <div class="btn" onclick="clickShop(6)">ყიდვა</div>
                            </div>
                        </div>
                        <div class="block"><p>ხელსაწყოები</p>
                            <div class="images"><img src="./img/toolbox.png"></div> 
                            <p class="price">$30,00</p> 
                            <div class="buy_wrapper">
                                <div class="btn" onclick="clickShop(7)">ყიდვა</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function clickShop(event) {
	cef.emit("cef:shop", `${event}`);
};


function createCefFuel() {
    const shopContainer = document.getElementById('fuelSadguri');

    shopContainer.innerHTML = `
          <div class="fuel_box">
            <img src="./img/icon.png" class="fuel_icon">
            <span class="fuel_name" style="font-family: 'BPG Nateli Mtavruli', sans-serif">ბენზინგასამართი
                სადგური</span>
            <img src="./img/back.png" class="fuel_img">
        </div>
        <div class="fuel_but">
            <span class="fuel_benzin"><span class="fuel_textb"
                    style="font-family: 'BPG Nateli Mtavruli', sans-serif">ბენზინი / ლიტრი</span>
                    <input placeholder="000" maxlength="3" id="fuelValue" onkeyup="this.value = this.value.replace (/[^0-9+]/, '')">
                    <span class="fuel_l"></span></span>
            <span class="fuel_button" style="font-family: 'BPG Nateli Mtavruli', sans-serif" onclick="fillFuel()">შევსება</span><br>
            <span class="fuel_exit" style="font-family: 'BPG Nateli Mtavruli', sans-serif" onclick="clickFuel(1)">დახურვა</span>
        </div>
    `;
}

function fillFuel() {
    var input = document.getElementById("fuelValue").value;
	cef.emit('cef:fillFuel', parseInt(input));
}
function clickFuel(event) {
	cef.emit("cef:fuel", `${event}`);
};

const currentUrl = window.location.href;
const targetUrl = "https://genuine-rp.ge/interface/index.html";
const targetLocal = "http://127.0.0.1:5500/indexxx.html";

if (currentUrl === targetUrl || currentUrl === targetLocal) {
	createHudInterface();
    createRadialMenu();
	createCefShop();
	createCefFuel();
}
