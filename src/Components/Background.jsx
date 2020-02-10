import React from "react";

class Background extends React.Component {
  render() {
    let baseNum = Math.random() * 150;
    const sqArray = [[]];

    for (let i = 1; i < 12; i++) {
      sqArray.push(["hi"]);
      for (let j = 1; j < 13; j++) {
        const num = Math.random();
        const num2 = Math.random();
        sqArray[i].push({ i, j, num });
        if (i % 2 === 0) {
          sqArray[i][j].color = "black";
          sqArray[i][j].opacity = "20%";
        } else {
          sqArray[i][j].color = `rgb(
          ${Math.floor(baseNum + num * 80)},
          ${Math.floor(num * 80)},
          ${Math.floor(150 - baseNum + num * 80)})`;
          sqArray[i][j].opacity = "100%";
          const keyFrameChoose = ["colorChange", "colorChange2"];
          // sqArray[i][j].animationName = keyFrameChoose[Math.floor(num * 2)];
          sqArray[i][j].animationDuration = `${30 + num2 * 20}s`;
          const direction = ["normal", "reverse"];
          sqArray[i][j].animationDirection = direction[Math.floor(num * 2)];
          sqArray[i][j].animationIterationCount = "infinite";
        }
        if (i % 4 !== 0 && (i - 1) % 4 !== 0) {
          sqArray[i][j].position = "relative";
          sqArray[i][j].left = "50%";
        }
      }
    }

    return (
      <div id="background">
        {sqArray.map(newSq =>
          newSq.map(sq => {
            if (sq !== "hi")
              return (
                <div
                  className="hex"
                  style={{
                    fontSize: "300px",
                    zIndex: sq.i,
                    gridArea: `${sq.i}/${sq.j}/${sq.i}/${sq.j}`,
                    color: sq.color,
                    opacity: sq.opacity,
                    filter: sq.filter,
                    animationName: sq.animationName,
                    animationDuration: sq.animationDuration,
                    animationDirection: sq.animationDirection,
                    animationIterationCount: sq.animationIterationCount,
                    position: sq.position,
                    left: sq.left
                  }}
                >
                  &#x2B22;
                </div>
              );
          })
        )}
      </div>
    );
  }
}

export default Background;
