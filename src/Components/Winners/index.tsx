import React from 'react'
import { Card, Image } from 'semantic-ui-react'

type winner = {
    name: string,
    score: number,
}

type winnersProp = {
    winners: winner[]
}

const Winners = (props: winnersProp) => (
  <Card.Group>
      {
          props.winners.map((winner, index) => {
              const order = index === 0 ? 1 : index === 1 ? 0 : index;
              const marginTop = index === 2 ? "80px" : index !== 0 ? "40px" : "0px";

              return (
                <Card style={{order, marginTop}}>
                <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                <Card.Content
                    header={winner.name}
                    description={winner.score}
                />
            </Card>
              )
          })

      }
  </Card.Group>
)

export default Winners