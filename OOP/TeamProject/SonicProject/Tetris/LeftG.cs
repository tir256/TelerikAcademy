﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tetris
{
    /// <summary>
    /// A figure with the form of Г letter turned on left
    /// </summary>
    public class LeftG : Figure
    {
        /// <summary>
        /// The default constructor for the figure initialization
        /// </summary>
        /// <param name="position">The position of the figure on the game field</param>
        public LeftG(Position position)
            : base(position, new char[,] { { '#', '#' }, { ' ', '#' }, { ' ', '#' } }) { }

    }
}
